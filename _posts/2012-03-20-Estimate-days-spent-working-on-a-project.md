---
author: mogui247
date: 2012-03-20
layout: post
slug: Estimate-days-spent-working-on-a-project
title: Estimate days spent working on a project 
tags: ['bash']
---

Today I was asked to write down how many days I've spent working on a project


my face was like:   
![wut](http://www.myfacewhen.com/images/390.jpg)


the first thing I've thought is well I'll look down to the svn (god bless version control) and from there I'll know at least date of start and end.    
and then who rembembers how many days in that period I was doing something else, I can only count working days and then arbitrarily subtract a random amount of days to have an estimate...     


so the mighty bash came handy for my estimate.


{% highlight bash %}
    svn log -r<VERSION_START>:<VERSION_END> | grep <YOUR_SVN_USER> | awk '{print $5}' |  sort -u | wc -l
{% endhighlight %}

adjust with your version number and svn username and you've got your fantastic estimate number

![yaaai](http://www.myfacewhen.com/images/147.jpg)

