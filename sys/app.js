//****************************
//*DATE: 2020 - 03 - 19      *
//*AUTHOR:someone120         *
//*遵守GPLv3协议              *
//*违者必究                   *
//****************************

exports.getByComm = function(comm, uuid) {
    return (
        '{"body": {"origin": {"type": "player"},"commandLine":"' +
        comm +
        '","version": 1},"header": {"requestId":"' +
        uuid +
        '","messagePurpose": "commandRequest","version": 1,"messageType": "commandRequest"}}'
    );
};
exports.getBysubscribe = function(eventName, uuid) {
    return (
        '{"body": {"eventName": "' +
        eventName +
        '"},"header": {"requestId":"' +
        uuid +
        '","messagePurpose": "subscribe","version": 1,"messageType": "commandRequest"}}'
    );
};
exports.getByunsubscribe = function(eventName, uuid) {
    return (
        '{"body": {"eventName": "' +
        eventName +
        '"},"header": {"requestId":"' +
        uuid +
        '","messagePurpose": "unsubscribe","version": 1,"messageType": "commandRequest"}}'
    );
};
exports.sleep = function(time = 0) {
    //延时参数，看下面的用法
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
};
