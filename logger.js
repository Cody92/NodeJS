let url = "https://loggersystem/logme";

function log(message){
    //Http request to cloud to log message
    console.log(message);
}

module.exports.logmessage = log;