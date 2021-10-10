var http = require("http");
var fs = require("fs");
var os = require("os");
var ip = require('ip');


function getUpTime() {
    var uptime_sec = os.uptime();
    var uptime_min = uptime_sec/60;
    var uptime_hour = uptime_min/60;
    var uptime_day = uptime_hour/24;

    uptime_sec = Math.floor(uptime_sec);
    uptime_min = Math.floor(uptime_min);
    uptime_hour = Math.floor(uptime_hour);
    uptime_day = Math.floor(uptime_day);

    uptime_hour = uptime_hour%24;
    uptime_min = uptime_min%60;
    uptime_sec = uptime_sec%60;

    serverTime = (uptime_day + " days, " + uptime_hour + " hours, " + uptime_min + " minutes and " + uptime_sec + " seconds");
    return (serverTime);
}

function totalMem() {
    totalMemory = os.totalmem();
    totalMemoryMB = Math.floor(totalMemory/(1024*1024));
    return (totalMemoryMB + " MB");
}

function freeMem() {
    freeMemory = os.freemem();
    freeMemoryMB = Math.floor(freeMemory/(1024*1024));
    return (freeMemoryMB + " MB");
}

function numCPU() {
    numberCPU = os.cpus().length;
    return (numberCPU);
}

http.createServer(function(req, res){

    if (req.url === "/") {
        fs.readFile("./public/index.html", "UTF-8", function(err, body){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(body);
    });
}
    else if(req.url.match("/sysinfo")) {
        myHostName=os.hostname();
        html=`    
        <!DOCTYPE html>
        <html>
          <head>
            <title>Node JS Response</title>
          </head>
          <body>
            <p>Hostname: ${myHostName}</p>
            <p>IP: ${ip.address()}</p>
            <p>Server Uptime: ${getUpTime()}</p>
            <p>Total Memory: ${totalMem()}</p>
            <p>Free Memory: ${freeMem()}</p>
            <p>Number of CPUs: ${numCPU()}</p>            
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
