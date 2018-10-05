#! /usr/bin/env ruby
require 'open-uri'
require 'fileutils'
require 'json'
require 'net/http'
require 'openssl'

IS_DEV = (ARGV[0] == 'dev')
VER = ARGV[1].freeze unless IS_DEV
ROOTDIR = (File.dirname(__FILE__) + '/..').freeze
IS_ROOT = (IS_DEV ? ROOTDIR + '/../identity-server/public' : 'https://cdn.asmodee.net/is').freeze
ddir = IS_DEV ? ROOTDIR + '/build/lib' : ROOTDIR + "/dist/#{VER}/lib"
FileUtils.mkdir_p ddir
DEST_DIR = File.realpath(ddir).freeze

print "Copy file mod #{ARGV[0]} for version #{IS_DEV ? 'dev' : VER}...\n"

def devCopy(fullpath, filename)
    File.open(filename, 'w') do |f|
        content = open(fullpath).read
        content = content.gsub('"/js/dist/front/"', "stackinfo()[0].file.replace(/^https?:\\/\\//, '').replace(/^[^\\/]+/, '').replace(/manifest.*\\.js$/, '')") unless filename.index('manifest.').nil?
        f << content
    end
end

def prodCopy(fullpath, filename)
    File.open(filename, 'w') do |f|
        content = open(URI(fullpath)).read
        content = content.gsub('"/js/dist/front/"', "stackinfo()[0].file.replace(/^https?:\\/\\//, '').replace(/^[^\\/]+/, '').replace(/manifest.*\\.js$/, '')") unless filename.index('manifest.').nil?
        content = content.gsub(/asnetapi\.manifest\.[0-9a-z]+\.js\.map/, 'manifest.js.map') unless filename.index('manifest.').nil?
        content = content.gsub(/asnetapi\.vendor\.[0-9a-z]+\.js\.map/, 'vendor.js.map') unless filename.index('vendor.').nil?
        content = content.gsub(/asnetapi\.main\.[0-9a-z]+\.js\.map/, 'main.js.map') unless filename.index('main.').nil?
        f << content
    end
end

# ensure destdir exists

FileUtils.mkdir_p DEST_DIR

open(IS_ROOT + '/js/dist/front/manifest.json') do |f|
    JSON.parse(f.read).each_pair do |filename, fullpath|
        p 'copy ' + fullpath
        IS_DEV ? devCopy(IS_ROOT + fullpath, DEST_DIR + '/' + filename) : prodCopy(IS_ROOT + fullpath, DEST_DIR + '/' + filename)
    end
end
