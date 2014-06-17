"use strict";

Parse.initialize("M3u0JvCeU0dbgZGeK4aFk4z853HwvPZ38M8Z8E80", "uu7TG9lKX7t1Jq1yg8aF1R6dTPDaHEW2z3PxTLsk");

var url;
var caption;

var Post = Parse.Object.extend('Photos');

var query = new Parse.Query(Post);

query.find({
	success: function(results) {
		var template = _.template($('.image-temp').text());
		_.each(results, function (post) {
			$('.container').append(template(post.attributes))
		})
	},
	error: function(results) {
		console.log(error.message);
	}
})

var post = new Post();

$('.button-box').click(function() {
	post.set('url', $('.input-box').val());
	post.set('caption', $('.caption-box').val());

	post.save();
})



// var Comment = Parse.Object.extend({

// 	className: 'Comment'
// });

// var PostCollection = Parse.Collection.extend({

// 	model: 'Post',
// })

// var postCollection = new PostCollection();

// var myComment = new Comment();

// $('.add-comment').click(function() {
// 	myComment.set('url', $('.comment-box').val());

// 	myComment.set('parent', post);

// 	myComment.save();
// })

//this grabs all objs 
post.fetch({
	success: function(post) {
		console.log('yes')
	},
	error: function(post) {
		console.log('no')
	}
})



// myComment.fetch({add: true})



/////VIEW/////
// var PostView = Parse.View.extend({

// 	

// 	events: {

// 		"click .button-box" : "addImage" 
// 	},

// 	initialize: function() {

// 		$('.container').append(this.$el)
// 		this.render();
// 	},

// 	render: function() {

// 		var renderTemp = this.template(this.model)
// 		this.$el.html(renderTemp);
// 		return this;
// 	},

// 	addImage: function() {
	


// 	},
// });

// var getPost = new PostCollection();

// var postView = new PostView(); 

// getPost.fetch().done(function() {
// 	getPost.each(function(photos) {
// 		new PostView({model: photos});
// 	})
// });







