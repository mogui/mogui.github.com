---
author: mogui247
date: 2012-03-16
layout: post
slug: A-blog-post-about-a-script-to-write-blog-post
title: A blog post about a script to write blog post 
tags: ['bash']
---

I think it's quite self explainatory, am I wrong?   
for the less smmarter minds this script will create a post suitable for jekyll automating the front matter and the date, title things.   
As I already said I'm lazy and everything that will let me write more things on this blog is kinda useful

cya

oh the code   
obviously change author and preferred editor to your tastes

{% highlight applescript %}
    #!/bin/bash
    #
    # Copyright (c) 2011 Niko Usai <mogui83@gmail.com> http://mogui.it
    # 
    # This program is free software. It comes without any warranty, to
    # the extent permitted by applicable law. You can redistribute it
    # and/or modify it under the terms of the Do What The Fuck You Want
    # To Public License, Version 2, as published by Sam Hocevar. See
    # http://sam.zoy.org/wtfpl/COPYING for more details. 
    #
    #

    if [ $# -ne 1 ]
    then
        echo "Usage: `basename $0` { post name}"
        exit $E_BADARGS
    fi
    
    date=`date "+%Y-%m-%d"`
    slug=`echo $1 | sed 's/ /-/g'`
    filename="$date-$slug.md"
    
    echo "---
    author: mogui247
    date: $date
    layout: post
    slug: $slug
    title: $1 
    tags: ['tag', 'another']
    ---
    
    " > $filename
    vim  $filename

{% endhighlight %}

or on [github](https://github.com/mogui/.scripts/blob/master/bin/blogpost)
