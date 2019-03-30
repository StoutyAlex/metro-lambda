
module.exports = {
  send: (callback, data) => callback(null, {
    success: true,
    data,
  }),
  error: (callback, error) => {
    if (!error) {
      error = 'Unexpected error occurred.';
    }
    callback(null, {
      success: false,
      error,
  })
  },
};
