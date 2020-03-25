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
exports.getForChat = function(str, name, conn) {
    let reg = /b\s-?\d+\s\d+\s-?\d+\s-?\d+\s\d+\s-?\d+/;
    console.log(str);
    let b = reg.test(str);
    //app.fast_send("say " + reg.test(str), conn);
    app.fast_send("say '" + str + "'", conn);
    if (str == "a") {
        //当命令为a时
        console.log("A");

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
    } else {
        if (b) {
            console.log("b");

            str = str.split(" ");
            app.fast_send("say " + JSON.stringify(str), conn);
            let sl = app.sleep(10);
            let number =
                (str[4] - str[1]) * (str[5] - str[2]) * (str[6] - str[3]);
            let i = 0;
            for (let x = str[1]; x < str[4]; x++) {
                for (let y = str[2]; y < str[5]; y++) {
                    for (let z = str[3]; z < str[6]; z++) {
                        sl = sl.then(() => {
                            i++;
                            app.fast_send(
                                "setblock " + x + " " + y + " " + z + " stone",
                                conn
                            );
                            app.fast_send(
                                "title " +
                                    name +
                                    " actionbar 正在填充...[" +
                                    i +
                                    "/" +
                                    number +
                                    "]",
                                conn
                            );
                            return app.sleep(10);
                        });
                    }
                }
            }
        }
    }
};
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
