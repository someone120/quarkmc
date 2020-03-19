
function getByComm(comm,uuid){
    return '{"body": {"origin": {"type": "player"},"commandLine":'+ comm+',"version": 1},"header": {"requestId":'+ uuid+',"messagePurpose": "commandRequest","version": 1,"messageType": "commandRequest"}}'
}
function getBysubscribe(eventName,uuid){
    return '{"body": {"eventName": '+eventName+'},"header": {"requestId":'+ uuid+',"messagePurpose": "subscribe","version": 1,"messageType": "commandRequest"}}'
}
function getByunsubscribe(eventName,uuid){
    return '{"body": {"eventName": '+eventName+'},"header": {"requestId":'+ uuid+',"messagePurpose": "unsubscribe","version": 1,"messageType": "commandRequest"}}'
}