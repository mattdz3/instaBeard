"use strict";

var PhotoView = Parse.View.extend({

	template: _.template($('.image-temp').text()),

	className: "images",

	events: {
		// "click .button-box" : "savePhoto"
	},

	initialize: function() {
		$('.photo-container').prepend(this.el)
		this.render();
	},

	render: function() {
		console.log(this.model)
		var renderTemp = this.template(this.model.attributes)
		this.$el.html(renderTemp);
		return this;
	},

	// savePhoto: function() {

	// 	photo.set({
	// 		url: this.$el.find('.input-box').val()
	// 	})

	// 	collection.add(photo);

	// 	photo.save();
	// },
})


