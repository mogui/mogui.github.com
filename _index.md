---
layout: default
title: Home
---

<div class="fleft">
	{% for post in site.posts limit:3  %}
		<div class="high high-{{ forloop.index }}">
			<h3>{{post.title}}</h3>
			<span class="date">{{ post.date | date:"%b %d %Y" }}</span>
			<div class="post-content">
				<p>{{ post.content | strip_html | truncatewords:20 }} [...]</p>								<div class="more"><a href="{{ post.url }}">continue reading <strong>→</strong></a>
			</div>
			</div>
		</div>
	{% endfor %}
</div>
<div class="latest-tweets fleft" id="tweet-wrapper">
	<div style="">
		<div class="tweet-wrap">
			tweeet
		</div>
	</div>
</div>
