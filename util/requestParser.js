const { get } = require('lodash');
const metrolink = require('../metrolink');
const featureToggles = require('../util/featureToggles');

const types = {
  default: metrolink.groupedStation,
  grouped: metrolink.groupedStation,
  test: async (station) => station,
}

module.exports = request => {
  const station = get(request, 'station', null);
  const error = [];

  let method = types.default;

  if (!station) {
    error.push('No station property defined');
  }

  if (featureToggles.types) {
    const type = get(request, 'type', null);
    if (!type) {
      error.push('No Type property defined');
    }

    method = get(types, type, null);
    
    if(!method) {
      error.push('Type is not valid');
    }
  }

  if (error.length !== 0) {
    throw error.join(', ');
  }

  return {
    station,
    method,
  };
};
