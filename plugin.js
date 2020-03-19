//****************************
//*DATE: 2020 - 03 - 19      *
//*AUTHOR:someone120         *
//*遵守GPLv3协议              *
//*违者必究                   *
//****************************
var sqlite3 = require("sqlite3");
var fs = require("fs");
var db = new sqlite3.Database("database.db");
if (fs.existsSync(file)) {
  console.log("[Plugins info]Creating db file!");
  fs.openSync(file, "w");
}
function getTheResult(str) {
  console.log("[Plugin info] get Result:" + str);
}

