---
author: mogui247
date: '2011-09-05 09:09:21'
layout: post
slug: easy-way-to-round-corner-for-a-uiview
title: Easy way to round corner for a UIView
tags:
- iOS
---

{% highlight  objc %}
	[[aView layer] setCornerRadius:7.0];
	[[aView layer]	masksToBounds:YES];
{% endhighlight %}

But don't **fucking** forget to include Quartz Framework or you'll get mad!!!

