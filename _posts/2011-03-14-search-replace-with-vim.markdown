---
author: mogui247
date: '2011-03-14 09:00:33'
layout: post
slug: search-replace-with-vim
title: Search &amp; Replace with Vim
tags:
- bash
---

Using everyday remote servers and linux box from ssh editing config files and the like Vim is every day job. Today i need to change a string repeated a lot of times within the file, with another string. Basically I needed Search & Replace, for some strange reason I've never used it before, so here's the syntax

{% highlight bash %} :[range]s/search/replace/[options]{% endhighlight %}

- the range is optional if not specified it search only in the current line
- to search the entire document we can write **%** as the range
- there are some option to append the most useful are
- **g** to avoid stopping the replace at the first occurrance found 
- **c** to let vim ask to confirm every replace 

so if we want to search the entire file for the occurrance of *foo* and
replace them with *bar* we will write:

{% highlight bash %} :%s/foo/bar/gc{% endhighlight %}

