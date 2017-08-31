var express = require('express')
 var fs = require('fs');

var fileName = 'test.html';
var stream = fs.createWriteStream(fileName);

stream.once('open', function(fd) {
  var html = buildHtml();

  stream.end(html);
});

