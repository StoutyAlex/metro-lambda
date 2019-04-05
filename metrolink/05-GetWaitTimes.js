const _ = require('lodash');

const getWaitTimes = (incomingOrOutgoing) => {
  let waitTimes = [];
  incomingOrOutgoing.forEach((tram) => {
    if(!_.find(waitTimes, {'destination': tram.Dest0, 'wait': tram.Wait0 })) {
      if ( !tram.Dest0 ) return; 
      waitTimes.push({
        destination: tram.Dest0,
        wait: tram.Wait0
      });
    }
    if(!_.find(waitTimes, {'destination': tram.Dest1, 'wait': tram.Wait1 })) {
      if ( !tram.Dest1 ) return; 
      waitTimes.push({
        destination: tram.Dest1,
        wait: tram.Wait1
      });
    }
    if(!_.find(waitTimes, {'destination': tram.Dest2, 'wait': tram.Wait2 })) {
      if ( !tram.Dest2 ) return; 
      waitTimes.push({
        destination: tram.Dest2,
        wait: tram.Wait2
      });
    }
  });
  return waitTimes;
};

module.exports = (incomingAndOutgoing) => ({
  outgoing: getWaitTimes(incomingAndOutgoing.outgoing),
  incoming: getWaitTimes(incomingAndOutgoing.incoming),
  messageBoard: incomingAndOutgoing.messageBoard,
  metadata: incomingAndOutgoing.metadata,
});