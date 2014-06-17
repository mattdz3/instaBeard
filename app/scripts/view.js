/////VIEW/////
var PhotoView = Parse.View.extend({

	template: _.template($('.image-temp').text()),

	initialize: function() {

		$('.container').append(this.$el)
		this.render();
	},

	render: function() {

		var renderTemp = this.template(this.model.attributes)
		this.$el.html(renderTemp);
		return this;
	},

	events: {

		"click .button-box" : "addImage" 
	},

	addImage: function() {
		console.log('weeee')
		$('.button-box').click(function() {
			photos.set('url', newPhoto);
		})
	},
});
