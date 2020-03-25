//****************************
//*DATE: 2020 - 03 - 19      *
//*AUTHOR:someone120         *
//*遵守GPLv3协议              *
//*违者必究                   *
//****************************
var v1 = require("uuid");
console.log(v1.v1());
function getByComm(comm, uuid) {
    return (
        '{"body": {"origin": {"type": "player"},"commandLine":"' +
        comm +
        '","version": 1},"header": {"requestId":"' +
        uuid +
        '","messagePurpose": "commandRequest","version": 1,"messageType": "commandRequest"}}'
    );
}
function getBysubscribe(eventName, uuid) {
    return (
        '{"body": {"eventName": "' +
        eventName +
        '"},"header": {"requestId":"' +
        uuid +
        '","messagePurpose": "subscribe","version": 1,"messageType": "commandRequest"}}'
    );
}
function getByunsubscribe(eventName, uuid) {
    return (
        '{"body": {"eventName": "' +
        eventName +
        '"},"header": {"requestId":"' +
        uuid +
        '","messagePurpose": "unsubscribe","version": 1,"messageType": "commandRequest"}}'
    );
}
function sleep(time = 0) {
    //延时参数，看下面的用法
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}
function fast_send(comm, conn) {
    let uuid = v1.v1();
    console.log(uuid);
    conn.send(getByComm(comm, uuid));
}
function send(comm, conn, callback) {
    let uuid = v1.v1();
    conn.send(getByComm(comm, uuid));
    global.callback = callback;
    global.uuid = uuid;
}
exports.getByComm = getByComm;
exports.getBysubscribe = getBysubscribe;
exports.getByunsubscribe = getByunsubscribe;
exports.sleep = sleep;
exports.send = send;

exports.fast_send = fast_send;
exports.say = function(str, conn) {
    fast_send("say " + str, conn);
};
exports.setblock = function(x, y, z, block, data = 0) {
    fast_send(
        "setblock " + x + " " + y + " " + z + " " + block + " " + data,
        conn
    );
};
