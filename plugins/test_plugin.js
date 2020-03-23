var app = require("../sys/app")
exports.getComm = function () {
    return ["a", "b", "c"]
}
exports.getForComm = function (str) {
    console.log(str);
    return app.getByComm("say a", "00000001-0000-0000-0000-000000000000")
}
