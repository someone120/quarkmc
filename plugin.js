//****************************
//*DATE: 2020 - 03 - 19      *
//*AUTHOR:someone120         *
//*遵守GPLv3协议              *
//*违者必究                   *
//****************************
//初始化
var sqlite3 = require("sqlite3");
var fs = require("fs");
var file = "database.db";
var db = new sqlite3.Database(file);
if (!fs.existsSync(file)) {
    console.log("[Plugins info]Creating db file!");
    fs.openSync(file, "w");
    db.run(
        "CREATE TABLE PLUGINS(" +
            "COMMON  CHAR(128)," +
            "NAME  CHAR(32) NOT NULL);"
    );
}

function copyFile(src, dist) {
    fs.createReadStream(src).pipe(fs.createWriteStream(dist));
}
//初始化完毕
exports.getTheResult = function(str, conn) {
    console.log("[Plugin info] get Result:" + str);
    if (JSON.parse(str)["header"]["messagePurpose"] == "event") {
        str1 = JSON.parse(str)["body"]["properties"]["Message"];
        db.all(
            "select NAME,COMMON from PLUGINS where COMMON LIKE '" +
                str1.split(" ")[0] +
                "';",
            function(err, row) {
                //读有什么导入的命令和插件
                //                console.log(JSON.stringify(row));
                if (row[0] != undefined) {
                    let plugin = require("./plugins/" + row[0]["NAME"]);
                    let result = plugin.getForChat(
                        str1,
                        JSON.parse(str)["body"]["properties"]["Sender"],
                        conn
                    );
                    console.log(result);
                }
            }
        );
        //callback("say hello", "");
    }
    if (global.uuid != undefined) {
        if (JSON.parse(str)["header"]["requestId"] == global.uuid) {
            global.callback(str);
        }
    }
};
//下为install操作
var arguments = process.argv; //获取参数
function install(path) {
    //    console.log("test");
    var plugin = require("./" + path); //导入文件
    var commons = plugin.getAllComm(); //获取可执行的命令
    copyFile(path, "./plugins/" + path); //复制到plugins文件夹
    var name = path.split("/")[path.split("/").length - 1];
    var sql =
        "INSERT INTO 'PLUGINS' SELECT '" +
        commons[0] +
        "' AS 'COMMON','" +
        name +
        "' AS 'NAME'";
    for (i = 1; i < commons.length; i++) {
        sql += "UNION SELECT '" + commons[i] + "','" + name + "'";
    }
    sql += ";";
    var sql1 = db.prepare(sql);
    sql1.run();
}
console.log(arguments);
console.log(__dirname);
if (arguments[1] == __dirname + "/plugin.js") {
    //判断是否直接调用
    if (arguments[2] == "install") {
        if (arguments[3] != undefined) {
            //防止憨批
            install(arguments[3]);
        }
    }
}

exports.install = install;

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
//           #$$$$$$$$$%              -@$$$$$$$$B
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
