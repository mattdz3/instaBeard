"use strict";

var canvas = new fabric.Canvas('canvas');

fabric.Image.fromURL('http://3.bp.blogspot.com/-CLSUdjZjogg/UwiZtHnQphI/AAAAAAAAAHU/WgTB4zn36uk/s1600/moustache_png_by_tatidebieber-d56bqe2.png', function(img) {
  img.scale(.3),
  canvas.add(img);
  img.bringToFront();
});

fabric.Image.fromURL('http://www.e-cigarette-forum.com/forum/customavatars/avatar118832_21.gif', function(img) {
  img.left = 220,
  canvas.add(img);
});

fabric.Image.fromURL('images/cool_guy.jpg', function(img) {
  img.scale(.5),
  img.top = 150,
  canvas.add(img);
});


