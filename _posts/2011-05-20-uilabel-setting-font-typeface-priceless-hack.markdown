---
author: mogui247
date: '2011-05-20 14:53:38'
layout: post
slug: uilabel-setting-font-typeface-priceless-hack
status: publish
title: UILabel - setting font typeface priceless hack
tags:
- iOS
---

You will find yourself, as an iOS devel, in the need of the bold font within a certain font family. 
To find out if there is a bold version of American Typewriter, try outputting:
{% highlight objc %}
[UIFont fontNamesForFamilyName:@"American Typewriter"];
{% endhighlight %}

to the console. In this case, you should use "American Typewriter-Bold".

via [UILabel - setting font - typeface programmatically in iPhone - Stack Overflow](http://stackoverflow.com/questions/1302833/uilabel-setting-font-typeface-programmatically-in-iphone).

