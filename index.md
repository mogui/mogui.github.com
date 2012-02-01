---
layout: default
title: Home
---

{% if site.courtesy %}
<div style="margin:20px;text-align:center">
mogui is moving from Wordpress to jekyll so hang on!	
<p>we'll be temprally unavailable so <a href="http://twitter.com/mogui247">go check out Twitter</a></p>

<a href="http://twitter.com/mogui247"><img src="http://i.imgur.com/A98Pl.png" style="padding:5px;border:2px solid #eee" /></a>
</div>

{% else %}

<div class="fleft">
	{% for post in site.posts limit:3  %}
		<div class="high high-{{ forloop.index }}">
			<h3>{{post.title}}</h3>
			<span class="date">{{ post.date | date:"%b %d %Y" }}</span>
			<div class="post-content">
				<p>{{ post.content | strip_html | truncatewords:20 }} [...]</p>	
				<div class="more"><a href="{{ post.url }}">continue reading <strong>→</strong></a>
			</div>
			</div>
		</div>
	{% endfor %}
</div>
<div class="latest-tweets fleft" id="tweet-wrapper">
<div class="loader">&nbsp;</div>
	
</div>

	


<script type="text/javascript" charset="utf-8">
	$(document).ready(function(){

		$('#tweet-wrapper .loader').css({'width':'290px','padding-top':'300px','text-align':'center'});
		$('#tweet-wrapper .loader').activity({align:'center', valign:'center'});
		
		var link = document.createElement('script');
		link.setAttribute('type', 'text/javascript');
		link.setAttribute('src', 'http://api.twitter.com/1/statuses/user_timeline/mogui247.json?count=20&include_entities=1&include_rts=1&callback=whyS0s3r10uz');
		document.getElementsByTagName('body')[0].appendChild(link);
	});
</script>

{% endif %}