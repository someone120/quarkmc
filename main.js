var ws = require("nodejs-websocket");
var plugins=require("plugin.js")
var server = ws.createServer(function(conn){
    conn.on("text", function (str) {
        
    })
}
).listen(8001)
console.log("[server info]已启动服务器，等待连接");