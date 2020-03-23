//****************************
//*DATE: 2020 - 03 - 19      *
//*AUTHOR:someone120         *
//*遵守GPLv3协议              *
//*违者必究                   *
//****************************
var ws = require("nodejs-websocket");
var plugin = require("./plugin");
var app = require("./sys/app.js");
var server = ws.createServer(function (conn) {
    conn.on("text", function (str) {
        plugin.getTheResult(str, conn);
    });
    console.log("New connection");
    conn.send(app.getByComm("say nmsl", "00000001-0000-0000-0000-000000000000"));
    conn.send(app.getBysubscribe("PlayerMessage", "74578561-0000-0000-0000-000000000000"))
}).listen(1234);
console.log("[server info]已启动服务器，等待连接");
