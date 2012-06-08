---
author: mogui247
date: 2012-06-08
layout: post
slug: getJsonValue
title: getJsonValue - a Node.js script that extracts a value from a JSON (file or stdin)
tags: ['script', JSON, 'Node.js']
---

Extracts a value from a json specified by a keyPath.   
A keyPath is a string of key and array index concatenated by a dot.   

{% highlight bash %}
    $ getJsonValue ./yourfile.json longlist.3.name
    $ mighty value
{%  endhighlight %}

extracts the value of the key name of the 3rd element of the array value of longlist key

The filename is optional, if it is not presents the script will read from STDIN so it is usable for piping input 

{% highlight bash %}
    $ curl -sS 'http://search.twitter.com/search.json?q=lulzsec' | getJsonValue results.0.text
    $ LulzSec: ALL YOUR BASE ARE BELONG TO US                
{%  endhighlight %}

There is a special key that can be used, **count**, it will output the number of elements in the array (if value is an array ) or of the char in a string

{% highlight bash %}
    $ getJsonValue ./yourfile.json longlist.count 
    $ 5536
{%  endhighlight %}

If the value of the key is a JSON object teh script will return it as a string (available to pipe through other shit)

Hope this will be useful to someone else.

If you're wondering why it's written in node that's because It is part of another project I'm writing :P   
Let me know if you port this short shit to some other language (if i've got time python will be first)!!!

[Link to source](https://github.com/mogui/.scripts/blob/master/bin/getJsonValue)
