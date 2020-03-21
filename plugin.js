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
  db.run("CREATE TABLE PLUGINS(ID INTEGER PRIMARY KEY AUTOINCREMENT," + "NAME  CHAR(32) NOT NULL," + "COMMON  CHAR(128));")
}

function copyFile(src, dist) {
  fs.createReadStream(src).pipe(fs.createWriteStream(dist));
}
//初始化完毕
exports.getTheResult = function (str, conn) {
  console.log("[Plugin info] get Result:" + str);
  str = str.split(" ");
  db.all("select NAME,COMMON from PLUGINS where COMMON=" + str[0] + ";", function (
    err,
    row
  ) {
    //读有什么导入的命令和插件
    console.log(JSON.stringify(row));
  });
  //callback("say hello", "");
};
//下为install操作
var arguments = process.argv; //获取参数
console.log(arguments);
console.log(__dirname);
if (arguments[1] == __dirname + "/plugin.js") {
  //判断是否直接调用
  if (arguments[2] == "install") {
    if (arguments[3] != undefined) {
      //防止憨批
      console.log("test");
      var plugin = require(arguments[3]); //导入文件
      var commons = plugin.getComm()['commons']; //获取可执行的命令
      copyFile(arguments[3], "./plugins"); //复制到plugins文件夹
      var name = arguments[3].split("/")[arguments[3].split("/").length - 1]
      var sql = "INSERT INTO 'PLUGINS' SELECT '" + commons[0] + "' AS 'COMMON','" + name + "' AS 'NAME'"
      for (i = 1; i < commons.length; i++) {
        sql += "UNION SELECT '" + commons[i] + "','" + name + "'"
      }
      sql += ";"
      var sql1 = db.prepare(sql);
      sql1.run()
    }
  }
}