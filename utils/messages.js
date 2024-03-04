const moment = require("moment");

function formatMessage(username, text) {
  return {
    username,
    text,
      time: new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' }),
  };
}

module.exports = formatMessage;
