
module.exports = (data, stationName) => {
  const result = data.filter((station) =>
    station.StationLocation.toLowerCase() === stationName.toLowerCase()
  );

  if (result.length === 0) {
    throw new Error('No Station Exists');
  }
  
  return result;
};