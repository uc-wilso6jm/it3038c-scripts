const { fstat } = require("fs");
var http = require("http");

function getUptime() {
    serverTime = os.uptime();
    return serverTime
}

var server = http.createServer(function(req, res)
{
    if (req.url==="/") 
    {
        res.writeHead(200, {"content-Type":"text/html"});
        fstat.readFile("./public/index.html", "UTF-8", function(err, body)
        {
            res.writeHead(200, {"Content-Type":"text/text"});
            res.end(body);
        });
    }
}



server.listen(3000)

console.log("Server listening on port 3000");
