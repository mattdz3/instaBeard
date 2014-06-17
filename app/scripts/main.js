"use strict";

Parse.initialize("M3u0JvCeU0dbgZGeK4aFk4z853HwvPZ38M8Z8E80", "uu7TG9lKX7t1Jq1yg8aF1R6dTPDaHEW2z3PxTLsk");

var url;
var caption;
var photos;


var Photo = Parse.Object.extend('Photo');

// var query = new Parse.Query(Photo);

var photo = new Photo();

console.log(photo)

$('.button-box').click(function() {
	photo.set('url', $('.input-box').val());
	photo.set('caption', $('.caption-box').val());

	photo.save();
})




console.log(photos)

// photos.fetch({
// 	success: function(photos) {
// 		console.log('yes')
// 		photos.each(function(photo){
// 			console.log(photo)
// 		})

// 	},
// 	error: function(post) {
// 		console.log('no')
// 	}
// })



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




// myComment.fetch({add: true})



/////VIEW/////


// var getPost = new PostCollection();

// var postView = new PostView(); 

// getPost.fetch().done(function() {
// 	getPost.each(function(photos) {
// 		new PostView({model: photos});
// 	})
// });


// function getPhotos() {


	

// var PostView = Parse.View.extend({

// 	var template = _.template($('.image-temp').text());
	
// 	events: {

// 		"click .button-box" : "addImage" 
// 	},

// 	initialize: function() {

// 		query.find({
// 			success: function(results) {
				

// 				_.each(results, function (photo) {
// 					console.log("hello")
// 					$('.img-cont').append(template(photo.attributes))
// 				})
// 			},
			
// 			error: function(results) {
// 				console.log(error.message);
// 			}
// 		})
// 	},

// 	render: function() {

// 		var renderTemp = this.template(this.model)
// 		this.$el.html(renderTemp);
// 		return this;
// 	},

// 	addImage: function() {
	


// 	},
// });




