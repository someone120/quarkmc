if (__dirname.split("/")[__dirname.split("/").length - 1] == "plugins") {
    var app = require("../sys/app");
} else {
    var app = require("./sys/app");
}

function sleep(time = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}
exports.getAllComm = function() {
    return ["a", "b", "c"];
};
exports.getForChat = function(str) {
    console.log(str);
    return app.getByComm("say a", "00000001-0000-0000-0000-000000000000");
};
exports.getForChat = function(str, conn) {
    if (str == "a") {
        let sl = sleep(10);
        for (let x = 0; x < 10; x++) {
            var i = 100;
            for (let y = 80; y < 90; y++) {
                for (let z = 0; z < 10; z++) {
                    sl = sl.then(() => {
                        i++;
                        conn.send(
                            app.getByComm(
                                "setblock " + x + " " + y + " " + z + " stone",
                                "00000001-0000-0000-0000-000000000" + i
                            )
                        );
                        return sleep(10);
                    });
                }
            }
        }
    }
};
