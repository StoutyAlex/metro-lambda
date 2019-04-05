require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const _ = require('lodash');

console.log('Make sure this is ran in the TOP level directory');

const getData = async () => {
  return await axios.get('https://api.tfgm.com/odata/Metrolinks', {
    headers: {
      'Ocp-Apim-Subscription-Key': process.env.METRO_API
    }
  });
};

const run = async () => {
  const stationLines = {};
  const data = await getData();
  const { value } = data.data;

  value.forEach((stop) => {
    stationLines[_.camelCase(stop.StationLocation)] = _.camelCase(stop.Line);
  });
  
  fs.writeFileSync('./data/stationLines.json', JSON.stringify(stationLines, null, 2));
};

run();
