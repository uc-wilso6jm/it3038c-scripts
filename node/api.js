var http = require("http"); 
var data = require("./widgets.json");
 
function listBlue(res) { 
    var colorBlue = data.filter(function(item) { 
        return item.color === "blue"; 
    }); 

    res.end(JSON.stringify(colorBlue)); 
} 

function listGreen(res) { 
    var colorGreen = data.filter(function(item) { 
        return item.color === "green"; 
    }); 

    res.end(JSON.stringify(colorGreen)); 
} 

function listBlack(res) { 
    var colorBlack = data.filter(function(item) { 
        return item.color === "black"; 
    }); 

    res.end(JSON.stringify(colorBlack)); 
} 

var server = http.createServer(function(req, res){ 
    if (req.url === "/") { 
        res.writeHead(200, {"Content-Type": "text/json"}); 
        res.end(JSON.stringify(data)); 
    } 
else if (req.url === "/blue") {
    listBlue(res);
}
else { 
        res.writeHead(404, {"Content-Type": "text/plain"});       
        res.end("Data not found");         
    } 
}); 
 
server.listen(3000); 
console.log("Server is listening on port 3000"); 
