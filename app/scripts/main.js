"use strict";

Parse.initialize("M3u0JvCeU0dbgZGeK4aFk4z853HwvPZ38M8Z8E80", "uu7TG9lKX7t1Jq1yg8aF1R6dTPDaHEW2z3PxTLsk");


var Photo = Parse.Object.extend('Photo');

// var query = new Parse.Query(Photo);

var photo = new Photo();

var url;
$('.button-box').click(function() {
	photo.set('url', $('.input-box').val());
	photo.set('caption', $('.caption-box').val());

	photo.save();
})

var PhotoCollection = Parse.Collection.extend({

	model: Photo,
})

var collection = new PhotoCollection();


var PhotoView = Parse.View.extend({

	template: _.template($('.image-temp').text()),

	initialize: function() {
		$('.img-cont').append(this.el)
		this.render();
	},

	render: function() {
		//MASON WHAT THE FUCK?
		console.log(this.model)
		var renderTemp = this.template(this.model)
		this.$el.html(renderTemp);
		return this;
	},
})

var view = new PhotoView();

collection.fetch({
	success: function(photos) {
		collection.each(function(photo){
			new PhotoView({model: photo})
			console.log(photo)
		})

	},
	error: function(post) {
		console.log('no')
	}
})

