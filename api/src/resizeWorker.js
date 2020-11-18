const gm = require('gm');
const {workerData, parentPort} = require('worker_threads');

gm(workerData.source)
    .resize(100, 100)
    .write(workerData.destination, (error) => {
      if (error) {
        throw new Error('Error in resize');
      }
      parentPort.postMessage({
        resized: true,
      });
    });
