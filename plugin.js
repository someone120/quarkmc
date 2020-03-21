//****************************
//*DATE: 2020 - 03 - 19      *
//*AUTHOR:someone120         *
//*遵守GPLv3协议              *
//*违者必究                   *
//****************************
var sqlite3 = require("sqlite3");
var fs = require("fs");
var file = "database.db";
if (!fs.existsSync(file)) {
  console.log("[Plugins info]Creating db file!");
  fs.openSync(file, "w");
}
var db = new sqlite3.Database(file);

exports.getTheResult = function (str, conn) {
  console.log("[Plugin info] get Result:" + str);
  str = str.split(" ");
  db.all("select path,common from plugin where common=" + str[0], function (err, row) {
    console.log(JSON.stringify(row));
  });
  //callback("say hello", "");
}

