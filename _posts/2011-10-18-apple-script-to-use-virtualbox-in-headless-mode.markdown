---
author: mogui247
date: '2011-10-18 09:28:35'
layout: post
slug: apple-script-to-use-virtualbox-in-headless-mode
title: Apple script to use VirtualBox in Headless mode
tags:
- applescript
- virtualbox
---

A little applescript I wrote to start my devel VirtualBox instance without using the Virtualbox interface.    
Very handful for developement server.

{% highlight  applescript %}

set out to do shell script "VBoxManage list vms | cut -d \\\" -f 2" 
set vm to choose from list paragraphs of out with title "VBoxHeadless" with prompt "Choose a vm to start" OK button name "Start" cancel button name "Cancel" 
do shell script "VBoxHeadless -s \"" & vm & "\" > /dev/null 2>&1 &"
{% endhighlight %}

