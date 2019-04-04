const find = require('lodash/find');

const getGrouped = (times) => {
  let groupedItems = [];
  times.forEach((tram) => {
    if(tram.wait == 0) return;
    if ( find(times, { destination: tram.destination })) {
      if(!find(groupedItems, { destination: tram.destination })) {
        groupedItems.push({
          destination: tram.destination,
          wait: [ tram.wait ]
        });
      } else {
        const index = groupedItems.findIndex(item => item.destination === tram.destination);
        groupedItems[index].wait.push(tram.wait);
      }
    }
  });
  return groupedItems;
};

module.exports = (data) => {
  return {
    outgoing: getGrouped(data.outgoing),
    incoming: getGrouped(data.incoming),
    messageBoard: data.messageBoard,
  }
};
