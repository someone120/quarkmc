//****************************
//*DATE: 2020 - 03 - 19      *
//*AUTHOR:someone120         *
//*遵守GPLv3协议              *
//*违者必究                   *
//****************************
var ws = require("nodejs-websocket");
var plugins = require("./sys/plugin");
var app = require("./sys/app.js");
var server = ws
  .createServer(function(conn) {
    conn.on("text", function(str) {
      plugins.getTheResult(str);
    });
    conn.on("connect", function() {
      console.log("[server info] 已连接上服务器。");

      conn.sendText(
        app.getByComm(
          'say "[Server info] 已经连接上服务器。"',
          "00000001-0000-0000-0000-000000000000"
        )
      );
    });
  })
  .listen(1234);
console.log("[server info]已启动服务器，等待连接");
