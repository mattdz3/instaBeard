"use strict";

var url;
var caption;

var post = new Post();

$('.button-box').click(function() {
	post.set('url', $('.input-box').val());
	post.set('caption', $('.caption-box').val());

	post.save();
})

var myComment = new Comment();

$('.add-comment').click(function() {
	myComment.set('url', $('.comment-box').val());

	myComment.set('parent', post);

	myComment.save();
})

//this grabs all objs 
post.fetch({add: true})

myComment.fetch({
	success: function(photos) {
		console.log('yes')
	},
	error: function(photos) {
		console.log('no')
	}
})














