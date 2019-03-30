
module.exports = (station) => {
  const incoming = station.filter((side) =>
    side.Direction === 'Incoming'
  ); 

  const outgoing = station.filter((side) =>
    side.Direction === 'Outgoing'
  );

  return {
    incoming,
    outgoing
  }
};