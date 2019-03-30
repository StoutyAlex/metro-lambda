require('dotenv').config();
const { send, error } = require('./util/response');
const requestParser = require('./util/requestParser');

exports.handler = async (event, context, callback) => {
  try {
    const { station, method } = requestParser(event);
    send(callback, await method(station));
  } catch (err) {
    error(callback, err);
  }
};
