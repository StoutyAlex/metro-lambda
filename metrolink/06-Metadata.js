const get = require('lodash/get');
const lines = require('../data/lines');

module.exports = (data, stationName) => {
  console.log(data);
  const line = get(lines, data[0].Line.toLowerCase(), null);

  if (!line) {
    throw 'No line found';
  } 

  const indexOfCurrentStop = line.stationOrder.indexOf(stationName);

  const nextStopInbound = line.stationOrder[indexOfCurrentStop+1];
  const nextStopOutbound = line.stationOrder[indexOfCurrentStop-1];

  data.metadata = {
    zone: null,
    nextStopOutbound,
    nextStopInbound,
  };

  return data;
};