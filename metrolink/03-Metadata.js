const { get, camelCase } = require('lodash');

const stations = require('../data/stations.json');
const services = require('../data/services.json');

module.exports = (data, stationName) => {
  stationName = camelCase(stationName);

  const stationMetadata = stations[stationName];

  const line = stationMetadata.line;
  const zone = stationMetadata.zone;

  const parkAndRide = get(stationMetadata, 'parkAndRide', false);
  const carPark = get(stationMetadata, 'carPark', false);
  const busInterchange = get(stationMetadata, 'busInterchange', false);
  const railInterchange = get(stationMetadata, 'railInterchange', false);
  const cycleHub = get(stationMetadata, 'cycleHub', false);

  let serviceArray = get(stationMetadata, 'service', false);
  serviceArray = serviceArray.map(service => {
    const { start, end } = services[service]
    return `${start} - ${end}`;
  });

  data.metadata = {
    services: serviceArray,
    zone,
    line,
    busInterchange,
    railInterchange,
    cycleHub,
    parkAndRide,
    carPark,
  };

  return data;
};