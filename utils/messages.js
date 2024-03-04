const moment = require("moment");

function formatMessage(username, text) {
  return {
    username,
    text,
      time: new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true, hour: 'numeric', minute: '2-digit' }),
  };
}

module.exports = formatMessage;
