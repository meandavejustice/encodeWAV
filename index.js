var work = require('webworkify');
var w = work(require('./work.js'));

module.exports = {
  encodeWAV: encodeWAV,
  getDownloadLink: getDownloadLink
};

function onComplete(cb) {
  w.addEventListener('message', function(ev) {
      cb(ev.data);
  });
}

function encodeWAV(channelBufferArray, sampleRate, cb) {
  w.postMessage({
    leftBuf: channelBufferArray[0],
    rightBuf: channelBufferArray[1],
    sampleRate: sampleRate
  });

  onComplete(cb);
}

function getDownloadLink(cb) {
  onComplete(function(blob) {
    var url = (window.URL || window.webkitURL).createObjectURL(blob);
    cb(url);
  })
}