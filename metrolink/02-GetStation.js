
module.exports = (data, stationName) => {
  const result = data.filter((station) =>
    station.StationLocation.toLowerCase() === stationName.toLowerCase()
  );

  if (result.length === 0) {
    throw `No Station Exists with the name: ${stationName}`;
  } else {
    result.messageBoard = result[0].MessageBoard;
  }
  
  return result;
};