#! /usr/bin/env ruby
require 'json'
require 'nokogiri'

ROOTDIR = File.dirname(__FILE__) + '/..'
IS_ROOT = ROOTDIR + '/../identity-server'
re = %r/asnet_wc\(['"][-\w#\.]*['"],\s*(\{.*?(}\);|<\/script>))/
transkeys = {}
allurls = {}

LOCALES = %w[en fr de].freeze

error = false
Dir.glob(File.join(File.realpath(IS_ROOT), 'src', 'views', '**', '*.twig')).each do |twig|
    File.open(twig) do |f|
        print "Parse file #{twig}..."
        scan = f.readlines.join.tr("\n", ' ').scan(re)
        scan.each do |fnd|
            print ' Found Widget... '
            parsed = fnd[0].gsub(/\s*#}\s*$/, '')
                           .gsub(%r{ \s*</script>\s*$}, '')
                           .gsub(/\s*}\);\s*$/, '')
                           .gsub(/},\s*$/, '}')
            transentry = parsed.gsub(/\|\s*(trans|e).*?}}/, '}}')
                               .gsub(/([-_\d\w]+\s*):\s*(\{\{(?!}}).*?}})/, '\1:"\2"')
                               .gsub(/(['"]?[-_\d\w]+['"]?)\s*:\s*['\s](\{\{\s*(?!}}).*?}})['\s]\s*?([\s,}]?)/, '\1: "\2"\3')
                               .gsub(/'(\{\{.*?}}[^']*?)'/, '"\1"') + '}'

            # urlsentry = parsed.gsub(/\|\s*(urls|e).*?}}/, '}}')
            #               .gsub(/([-_\d\w]+\s*):\s*(\{\{(?!}}).*?}})/, '\1:"\2"')
            #               .gsub(/(['"]?[-_\d\w]+['"]?)\s*:\s*'(\s*(?!').*)'\s*?([\s,}]?)/, '\1: "\2"\3') + '}'
            begin
                options = eval(transentry)
                if options[:trans].nil?
                    print ' No translation for this Widget...'
                else
                    trans = options[:trans]
                    print " Found translation for Widget... #{trans.keys.count} key(s) found"
                    # p trans
                    transkeys.merge! trans
                end
                if options[:urls].nil?
                    print ' No urls for this Widget...'
                else
                    urls = options[:urls]
                    print " Found urls for Widget... #{urls.keys.count} key(s) found"
                    # p trans
                    allurls.merge! urls
                end
            rescue SyntaxError => se
                p entry
                print "\n"
                print se
                p fnd
                error = true
            end
        end
        print "\n"
    end
end

if error
    print "\nError occurs. Stop now\n"
else
    print "\n\tFound #{transkeys.keys.count} translation keys globally\n\tFound #{allurls.keys.count} url keys globally\n\n"

    # Load Xliff files
    xliff = Hash[LOCALES.map do |lang|
        [
            lang,
            Nokogiri::XML(File.open("#{IS_ROOT}/resources/messages.#{lang}.xlf"))
        ]
    end]

    translations = Hash[LOCALES.map { |l| [l, {}] }]

    transkeys.each_pair do |k, v|
        v.gsub!(/(\{\{|'|}}|\s)/, '')
        print "Search trad for `#{v}`...\n"
        translations.each_key do |lang|
            translations[lang][k.to_s] = xliff[lang].xpath("//*[@resname='#{v}']/xliff:target", 'xliff' => 'urn:oasis:names:tc:xliff:document:1.2').text
        end
    end

    File.open(ROOTDIR + '/build/trans.js', 'w') do |f|
        s =<<EOF
            window.AsmodeeNet.Widget.Translations = #{translations.to_s.gsub('"=>', '": ')};
            window.AsmodeeNet.Widget.Urls = #{allurls.to_s.gsub('"=>', '": ').gsub(/({|(\s*)):"/, '\1"')};
EOF
        f << s
    end
end
