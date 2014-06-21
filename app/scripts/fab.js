"use strict";

var canvas = new fabric.Canvas('canvas');

//moustache
fabric.Image.fromURL('http://www.fantasyfestival.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/o/moustache-m-10-brown-grey-9999904418.png', function(img) {
  img.scale(.3),
  img.left = 30,
  canvas.add(img);
  img.bringToFront();
});

//beard
fabric.Image.fromURL('http://static.tumblr.com/23b2d323b41fe20cfd3ee8470e6e8c23/fmfoldl/p4zmreej3/tumblr_static_1363794435702.png', function(img) {
  img.scale(.4)
  img.top = 150,
  img.left = 70,
  canvas.add(img);
});

//eyepatch
fabric.Image.fromURL('http://img4.wikia.nocookie.net/__cb20131204145706/creepypasta/images/b/b7/Eyepatch.png', function(img) {
  img.scale(.5)
  img.top = 300,
  img.left = 30,
  canvas.add(img);
});

//cigar
fabric.Image.fromURL('http://kingsunlimited.com/images/cigar.png', function(img) {
  img.scale(.5)
  img.top = 430,
  img.left = 53,
  canvas.add(img);
});

//beer
fabric.Image.fromURL('http://redesign.sweetgrassbloomington.com/wp-content/uploads/2011/04/photo_beer.png', function(img) {
  img.scale(.5)
  img.top = 600,
  img.left = 130,
  canvas.add(img);
});

//top gun
fabric.Image.fromURL('http://i.imgur.com/yCbbyfN.png', function(img) {
  img.scale(.5)
  img.top = 840,
  img.left = 100,
  canvas.add(img);
});

//moustache2
fabric.Image.fromURL('http://3.bp.blogspot.com/-CLSUdjZjogg/UwiZtHnQphI/AAAAAAAAAHU/WgTB4zn36uk/s1600/moustache_png_by_tatidebieber-d56bqe2.png', function(img) {
  img.scale(.3),
  img.top = 1000,
  img.left = 30,
  canvas.add(img);
  img.bringToFront();
});


// fabric.Image.fromURL('images/cool_guy.jpg', function(img) {

//   // add filter
//   img.filters.push(new fabric.Image.filters.Grayscale());

//   // apply filters and re-render canvas when done
//   img.applyFilters(canvas.renderAll.bind(canvas));

//   // add image onto canvas
//   canvas.add(img);
// });
