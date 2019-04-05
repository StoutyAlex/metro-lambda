const getData = require('./01-GetData');
const getStation = require('./02-GetStation');
const getMetadata = require('./03-Metadata');
const getSide = require('./04-GetSides');
const getWaitTimes = require('./05-GetWaitTimes');
const getGrouped = require('./06-Group');

const groupedStation = (stationName) => getData()
  .then(data => getStation(data.data.value, stationName))
  .then(data => getMetadata(data, stationName))
  .then(data => getSide(data))
  .then(data => getWaitTimes(data))
  .then(data => getGrouped(data));

const seperateStation = (stationName) => getData()
  .then(data => getStation(data.data.value, stationName))
  .then(data => getMetadata(data, stationName))
  .then(data => getSide(data))
  .then(data => getWaitTimes(data));

module.exports = {
  groupedStation,
  seperateStation,
};
