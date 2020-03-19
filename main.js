var ws = require("nodejs-websocket");
var plugins = require("plugin.js");
var app = require("sys/app.js");
var server = ws
  .createServer(function(conn) {
    conn.on("text", function(str) {});
    conn.on("connect", function() {
      app.getByComm();
    });
  })
  .listen(8001);
console.log("[server info]已启动服务器，等待连接");
