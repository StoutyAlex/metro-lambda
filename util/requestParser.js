const { get } = require('lodash');
const metrolink = require('../metrolink');

module.exports = request => {
  const station = get(request, 'station', null);
  const type = get(request, 'type', null);

  const error = [];
  
  if (!station) {
    error.push('No station property defined');
  }

  if (!type) {
    error.push('No Type property defined');
  }

  if (error.length !== 0) {
    throw error.join(', ');
  }

  return {
    station,
    method: metrolink.groupedStation,
  };
};
