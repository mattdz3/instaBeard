"use strict";

var Photo = Parse.Object.extend('Photo');


var PhotoCollection = Parse.Collection.extend({

	model: Photo,
})