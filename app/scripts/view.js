"use strict";

var url;
var caption;

var PostView = Parse.View.extend({

	template: _.template($('.image-temp').text()),

	initialize: function() {

		$('.container').append(this.model)
		this.render();
	},

	render: function() {

		var renderTemp = this.template(this.model)
		this.$el.html(renderTemp);
		return this;
	},

	events: {

		"click .button-box" : "addImage" 
	},

	addImage: function() {
		
		post.set('url', $('.input-box').val());
		post.set('caption', $('.caption-box').val());

		post.save();
	},
});

var postview = new PostView();
