var http = require("http"); 
var fs = require("fs");

var server = http.createServer(function(req, res){ 
    if (req.url === "/") {
        fs.readFile("index.html", "UTF-8", function(err, body){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(body);

}); 
 
server.listen(3000); 
console.log("Server is listening on port 3000"); 
