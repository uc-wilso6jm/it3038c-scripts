var http = require("http"); 
var fs = require("fs");

function showChars() {
    var htmlForm = document.forms[0].elements;
    var data = "";

    for (var i=0, j = htmlForm.length;i < j;i++)
    {
        if(form[i].type="text") {
            data += (htmlForm[i].value)
        }
    }
}

http.createServer(function(req, res){

    if (req.url === "/") {
        fs.readFile("index.html", "UTF-8", function(err, body){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(body);
    });
}
    else if(req.url.match("/pwgen")) {
        fs.readFile("pwgen.html", "UTF-8", function(err, body){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(body);
        });
    }
    else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end(`404 File Not Found at ${req.url}`);
    }
}).listen(3000);

console.log("Server listening on port 3000");
