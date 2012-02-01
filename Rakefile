
require 'rake'
require "jekyll"

desc "Publish to git hub pages"
task :test do
  puts "testone"
end

desc "Publish to git hub pages"
task :publish do
  sh "git push origin master"
end

desc "generate tags archive"
task :tags do 
  sh "PATH=$PATH:/usr/local/lib/ruby/gems/1.8/gems/"
  #require 'jekyll'
  include Jekyll::Filters
  options = Jekyll.configuration({})
  site = Jekyll::Site.new(options)
  site.read_posts('')
  #nuke old tags pages, recreate
  FileUtils.rm_rf("tags")
  site.tags.sort.each do |tag, posts|
  	  # generate slug-friendly tag
        tag_slug = tag.gsub(' ','-')
        html = <<-HTML
---
layout: page
title: Python
---

{% assign tags_list = site.tags["#{tag}"] %}  
{% include tag_list.html %}

HTML
    FileUtils.mkdir_p("tags/#{tag_slug}")
    File.open("tags/#{tag_slug}/index.md", 'w+') do |file|
      file.puts html
    end
  end
  sh "git add tags/*"
  puts "Generated Tags pages"
end #task :tag_archive