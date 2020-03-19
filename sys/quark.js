
function getByComm(comm,uuid){
    return {"body": {"origin": {"type": "player"},"commandLine": "say Hello","version": 1},"header": {"requestId": "00000000-0000-0000-0000-000000000000","messagePurpose": "commandRequest","version": 1,"messageType": "commandRequest"}}
}
function getBysubscribe(eventName,uuid){
    return {"body": {"eventName": "PlayerMessage"},"header": {"requestId": "00000000-0000-0000-0000-000000000000","messagePurpose": "subscribe","version": 1,"messageType": "commandRequest"}}
}
function getByunsubscribe(eventName,uuid){
    return {"body": {"eventName": "PlayerMessage"},"header": {"requestId": "00000000-0000-0000-0000-000000000000","messagePurpose": "unsubscribe","version": 1,"messageType": "commandRequest"}}
}