//****************************
//*DATE: 2020 - 03 - 19      *
//*AUTHOR:someone120         *
//*遵守GPLv3协议              *
//*违者必究                   *
//****************************
var ws = require("nodejs-websocket");
var plugin = require("./plugin");
var app = require("./sys/app.js");
var request = require("request");
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

function getIPAddress() {
    var interfaces = require("os").networkInterfaces();
    for (var devName in interfaces) {
        var fiacre = interfaces[devName];
        for (var i = 0; i < fiacre.length; i++) {
            var alias = fiacre[i];
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

function checkForUpdates() {
    console.log("[Server info] 正在检测更新...");

    request("http://quarkmc.tk/ver.json", (error, response, body) => {
        if (!error && response.statusCode == 200) {
            arr = JSON.parse(body);
            arr = arr[0];
            if (arr["verCode"] > 1) {
                console.log(
                    "[Server info] 检测到新版本！\n" +
                        "[Server info] 版本号：" +
                        arr["ver"] +
                        "\n[Server info] 更新内容：" +
                        arr["new"]
                );
            } else {
                console.log("[Server info] 您已处于最新版本");
            }
        }
    });
}
var ip = getIPAddress();
console.log("[Server info] 在mc里执行/connect " + ip + ":1234");
checkForUpdates();
//
//           $$$$$$$$$$$$$$$       $$$$$$$$$$$$$$$%.
//        &$               &$    =$                $
//        $                 $$$$$$=                @&
//     B=$$                 $$$$$$                  $$&=
//     $$$$      +1s        $$&-$$       +1s        $$$
//     $$$$                 $-   $                  $$$
//        $                 $    $                  .B
//        $                 @    $                 .=
//         $                $     $                %
//          $            =$         =$            @&
//           #$$$$$$$$$%              -@$$$$$$$B
//
//                     莫生        莫生
//                     气         气
//
//                       代码辣鸡非我意,
//                       自己动手分田地;
//                       你若气死谁如意?
//                       谈笑风生活长命.
//
// Release 1.1.3. Powered by 主站质保团队`
