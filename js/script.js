var tweetTemplate = '\
<div class="tweet-wrap">\
	<img src="{{image}}" />\
	<div class="tweet-name">\
		<a href="http://twitter.com/{{screen_name}}" target="_blank" >{{screen_name}}</a>\
		<span>{{name}}</span>\
	</div>\
	<div class"tweet">{{{ text }}}</div>\
 	<div class="time">{{ date }}</div>\
</div>';

function whyS0s3r10uz(data){
	var tweets = JSON.parse
	console.log(data.length);
	$.each(data, function(index, tweet) { 
		console.log(tweet);
		var reparsed_text = tweet.text;
		
		$.each(tweet.entities.urls, function(index, url){
			reparsed_text = reparsed_text.replace(url.url, '<a href="'+url.url+'" target="_blank">'+url.url+'</a>');
		});
		
		$.each(tweet.entities.hashtags, function(index, hash){
			reparsed_text = reparsed_text.replace("#"+hash.text, '<a href="https://twitter.com/#!/search/%23'+hash.text+'/" target="_blank">#'+hash.text+'</a>');
		});
		
		$.each(tweet.entities.user_mentions, function(index, hash){
			reparsed_text = reparsed_text.replace("@"+hash.screen_name, '<a href="http://www.twitter.com/'+hash.screen_name+'/" target="_blank">@'+hash.screen_name+'</a>');
		});		
		
		var view = {
			name: tweet.user.name,
			image: tweet.user.profile_image_url,
			screen_name: tweet.user.screen_name,
			date: tweet.created_at,
			text: reparsed_text
		}
		
	  	var output = Mustache.render(tweetTemplate, view);
		$('#tweet-wrapper').append(output);
	});

	
	$('#tweet-wrapper .loader').activity(false);
	$('#tweet-wrapper .loader').fadeOut();
}