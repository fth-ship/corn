// file: modules/name.js - created at 2014-12-21, 07:11
function nameHandler() {
  var out = null;
  var nameData = require('../data/name');
  var nameDataLen = nameData.length;
  var randomIndex = Math.random() * (nameDataLen - 1);
  var roundedIndex = Math.floor(randomIndex);

  out = nameData[roundedIndex];

  return out;
}
module.exports = exports = nameHandler;
