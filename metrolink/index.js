const getData = require('./01-GetData');
const getStation = require('./02-GetStation');
const getSide = require('./03-GetSides');
const getWaitTimes = require('./04-GetWaitTimes');
const getGrouped = require('./05-Group');

const groupedStation = (stationName) => getData()
  .then(data => getStation(data.data.value, stationName))
  .then(data => getSide(data))
  .then(data => getWaitTimes(data))
  .then(data => getGrouped(data));

module.exports = {
  groupedStation,
};
