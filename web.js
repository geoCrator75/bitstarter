var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
var holder=new Buffer(128);
holder=fs.readFileSync('index.html','utf-8');
  response.send(holder.toString("utf-8",0,(holder.length)));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
