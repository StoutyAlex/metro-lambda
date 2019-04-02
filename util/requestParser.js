const { get } = require('lodash');
const metrolink = require('../metrolink');
const featureToggles = require('../util/featureToggles');

const types = {
  default: metrolink.groupedStation,
  grouped: metrolink.groupedStation,
  test: async (station) => station,
}

const edgeCaseStops = new Set([
  'ashton-under-lyne',
  'deansgate-castlefield',
  'st-peters-square',
]);

const stationParse = request => {
  let station;

  if (get(request, 'body', null)) {
    request.body = JSON.parse(request.body);
  }

  station = get(request, 'body.station', null);

  if (!station) {
    station = get(request, 'queryStringParameters.station', null);
  }

  if (station) {
    if (!edgeCaseStops.has(station)) {
      station = station.replace('-', ' ');
    } else if (station == 'deansgate-castlefield') {
      station = 'deansgate - castlefield';
    } else if (station == 'st-peters-square') {
      station = 'st peter\'s square';
    }
  }
  
  return station;
};

module.exports = request => {
  const station = stationParse(request);
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
