var http = require("http"); 
var fs = require("fs");

http.createServer(function(req, res){

    if (req.url === "/") {
        fs.readFile("index.html", "UTF-8", function(err, body){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(body);
    });
}
    else if(req.url.match("/pwgen")) {
        html=`    
        <!DOCTYPE html>
        <html>
          <head>
            <title>Project 3 - Password Generator</title>
          </head>
          <body>
                      
          </body>
        </html>` 
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(html);
    }
    else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end(`404 File Not Found at ${req.url}`);
    }
}).listen(3000);

console.log("Server listening on port 3000");
