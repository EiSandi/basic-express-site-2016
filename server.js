const http = require('http')
const fs = require('fs')
const express = require('express')

const app = express()
const folderPath = __dirname + '/public_files'

//mount your static paths
// renders your image and index.html
app.use(express.static(folderPath))

// renders your index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/test.html'));
});

//mount your other paths
// in this case render 404.
app.get("*",function (req, res) {
  res.status(404).send(''File not found'');
});

app.listen(3500, function () {
 console.log('Example app listening on port 3500!');
});