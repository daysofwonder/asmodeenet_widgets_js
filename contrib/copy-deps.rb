#! /usr/bin/env ruby

require 'open-uri'
require 'fileutils'

IS_DEV = (ARGV[0] == 'dev')
VER = ARGV[1].freeze unless IS_DEV
ROOTDIR = (File.dirname(__FILE__) + '/..').freeze
NODE_DIR = (ROOTDIR + '/node_modules').freeze
ddir = IS_DEV ? ROOTDIR + '/build' : ROOTDIR + "/dist/#{VER}"
FileUtils.mkdir_p ddir
DEST_DIR = File.realpath(ddir).freeze

print "Copy deps mod #{ARGV[0]} for version #{IS_DEV ? 'dev' : VER}...\n"

def copy_to(src, type)
    FileUtils.mkdir_p DEST_DIR + '/' + type
    target = DEST_DIR + "/#{type}/" + File.basename(src)
    src = File.realpath(src)
    print "Copy #{src} to #{target}...\n"
    File.open(target, 'w') { |f| f << open(src).read }
end

copy_to(NODE_DIR + '/asmodeenet-font/css/anet-webfont.min.css', 'lib')
copy_to(NODE_DIR + '/stackinfo/generatedBuild/stackinfo.umd.js', 'lib')
copy_to(NODE_DIR + '/asmodeenet-font/fonts/anet-webfont.eot', 'fonts')
copy_to(NODE_DIR + '/asmodeenet-font/fonts/anet-webfont.otf', 'fonts')
copy_to(NODE_DIR + '/asmodeenet-font/fonts/anet-webfont.svg', 'fonts')
copy_to(NODE_DIR + '/asmodeenet-font/fonts/anet-webfont.ttf', 'fonts')
copy_to(NODE_DIR + '/asmodeenet-font/fonts/anet-webfont.woff', 'fonts')
copy_to(NODE_DIR + '/asmodeenet-font/fonts/anet-webfont.woff2', 'fonts')
