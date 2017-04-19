var data = require('./randomNum');
var convert = require('./convertNum');

var outPut = {
  getHeading: function() {
    //return some string
    return 'Acount Balance : \n';
  },
  acountBalance: function() {
    return convert(data(100, 100000));
  }
};

module.exports = outPut;
