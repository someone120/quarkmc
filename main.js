//****************************
//*DATE: 2020 - 03 - 19      *
//*AUTHOR:someone120         *
//*遵守GPLv3协议              *
//*违者必究                   *
//****************************
var ws = require("nodejs-websocket");
var plugin = require("./plugin");
var app = require("./sys/app.js");
var server = ws
    .createServer(function(conn) {
        conn.on("text", function(str) {
            plugin.getTheResult(str, conn);
        });
        console.log("New connection");
        conn.send(
            app.getByComm(
                "say [Server info] 已经连接上服务器",
                "00000001-0000-0000-0000-000000000000"
            )
        );
        conn.send(
            app.getBysubscribe(
                "PlayerMessage",
                "74578561-0000-0000-0000-000000000000"
            )
        );
    })
    .listen(1234);
console.log("[Server info]已启动服务器，等待连接");

function getIPAdress() {
    var interfaces = require("os").networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (
                alias.family === "IPv4" &&
                alias.address !== "127.0.0.1" &&
                !alias.internal
            ) {
                return alias.address;
            }
        }
    }
}

var ip = getIPAdress();
console.log("[Server info]在mc里执行/connect " + ip + ":1234");
