var app;
if (__dirname.split("/")[__dirname.split("/").length - 1] == "plugins") {
    app = require("../sys/app");
} else {
    app = require("./sys/app");
}

exports.getAllComm = function() {
    return ["a", "b", "c"];
};
exports.getForChat = function(str) {
    console.log(str);
    return app.getByComm("say a", "00000001-0000-0000-0000-000000000000");
};
exports.getForChat = function(str, conn) {
    let reg = /b -?\d \d -?\d -?\d \d -?\d/;
    console.log(str);
    fast_send("say b", conn);
    if (str == "a") {
        //当命令为a时
        let sl = app.sleep(10); //sleep用法
        for (let x = 0; x < 10; x++) {
            var i = 100;
            for (let y = 80; y < 90; y++) {
                for (let z = 0; z < 10; z++) {
                    //用setblock做一个10*10*10的方块
                    sl = sl.then(() => {
                        //sleep的使用方法
                        i++;
                        app.fast_send(
                            //获取应发送的json
                            "setblock " + x + " " + y + " " + z + " stone",
                            conn
                        );
                        return app.sleep(10);
                    });
                }
            }
        }
    } else if (reg.test(str)) {
        str = str.split(" ");
        let sl = app.sleep(10);
        for (let x = str[1]; x < str[4]; x++) {
            for (let y = str[2]; y < str[5]; y++) {
                for (let z = str[3]; z < str[6]; z++) {
                    sl = sl.then(() => {
                        app.fast_send(
                            "setblock " + x + " " + y + " " + z + " stone",
                            conn
                        );
                        return sleep(10);
                    });
                }
            }
        }
    }
};
