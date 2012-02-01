---
author: mogui247
date: '2011-06-14 22:24:30'
layout: post
slug: iosfacebookcommentwidget
title: iOS Facebook Comment Widget
tags:
- projects
- iOS
---

It's a basic implementation for iOS (Primarly iPad, adaptiong it for iPhone should be easy and on the road! ) of the Facebook Web-based [Comment Social-
Plugin](http://developers.facebook.com/docs/reference/plugins/comments/).

For now only login with Facebook ID works, the other three are disabled;

Nothing has to be setted and doesn't rely on any other library just include the 3 files and include the header one: [code lang="obj-c"]#import
"FacebookCommentsWidgetViewController.h"[/code] Using it is damn simple, it is an indipendent ViewController+View so you just have to add his view to your layout:

{% highlight  objc %}


FacebookCommentsWidgetViewController *fb = [[FacebookCommentsWidgetViewController alloc] initWithFrame:self.view.bounds   
	type:FacebookCommentsWidgetTypeFixed andUrl:@"http://maustbeavlidurl.com"];
[self.view addSubview:fb.view];
{% endhighlight %}

Just two things to note:

1. **http://maustbeavlidurl.com** is the url for which you want to retrieve the comments, the page where you have the fbml widget, or if you plan to just use it only on iOS it must be an unique and existent url, it's the identifier to which facebook comments are connected. 
2. the only option for now is to choose from two types of behaviour of the Widget View: 
 	- `FacebookCommentsWidgetTypeFixed` this mode the widget view remains the size of the frame you give when nit the controller and is scrollable
 	-  `FacebookCommentsWidgetTypeAutosized` in this mode (not fully functional) the view tries to resize its frame according to the content length of the comments. When the frame is resized a `kFacebookCommentsWidgetResizedNotification` is posted to allow layout rearranging.   

[on GitHub](https://github.com/mogui/iOSFacebookCommentWidge)

