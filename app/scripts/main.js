"use strict";

Parse.initialize("M3u0JvCeU0dbgZGeK4aFk4z853HwvPZ38M8Z8E80", "uu7TG9lKX7t1Jq1yg8aF1R6dTPDaHEW2z3PxTLsk");

var collection = new PhotoCollection();

var photo = new Photo(); 

$('.button-box').click(function() {
	photo.set('url', $('.input-box').val());
	photo.set('caption', $('.caption-box').val());

	photo.save();
})

collection.fetch({add: true,}).done(function() {
	collection.each(function(photoModel) {
		new PhotoView({model: photoModel});
	});
});








