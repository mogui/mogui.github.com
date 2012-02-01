---
layout: post
title: Remove accents from a String in iOS
author: mogui247
date: '2012-01-26'
tags: [iOS]
---

This will re-encode the string allowing accented and special chars (*like &agrave; &eacute; &ntilde;*) to degrade to the respective clean char (*ie. a e n*) Enjoy!

{% highlight  obj-c %}
NSString *newString = [[NSString alloc] initWithData: [oldString dataUsingEncoding:NSASCIIStringEncoding allowLossyConversion:YES] encoding:NSASCIIStringEncoding];
{% endhighlight %}
	
via [cocoa builder](http://www.cocoabuilder.com/archive/cocoa/153017-how-to-remove-accents-from-characters-e.html)
