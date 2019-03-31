
module.exports = {
  send: (callback, data) => callback(null, {
    statusCode: 200,
    isBase64Encoded: false,
    body: JSON.stringify({
      success: true,
      data,
    }),
  }),
  error: (callback, err, code=500) => {
    if (!err || err == {}) {
      err = 'Unexpected error occurred.';
    }
    callback(null, {
      statusCode: code,
      isBase64Encoded: false,
      body: JSON.stringify({
        success: false,
        error: err,
      }),
    });
  },
};
