"use strict";

Parse.initialize("M3u0JvCeU0dbgZGeK4aFk4z853HwvPZ38M8Z8E80", "uu7TG9lKX7t1Jq1yg8aF1R6dTPDaHEW2z3PxTLsk");


var Post = Parse.Object.extend({

	className: 'Photos'
});

var Comment = Parse.Object.extend({

	className: 'Comment'
});

var PostCollection = Parse.Collection.extend({

	model: 'Post'
})