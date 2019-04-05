const { send, error } = require('./util/response');
const requestParser = require('./util/requestParser');

exports.handler = async (event, context, callback) => {
  try {
    const { station, method } = requestParser(event);
    send(callback, await method(station));
  } catch (err) {
    console.log(err);
    error(callback, err);
  }
};
