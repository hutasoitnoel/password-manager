const Password = require('../models/password');

module.exports = function(done) {
  if (process.env.NODE_ENV === 'test') {
    Password
      .deleteMany({})
      .then(function() {
        done();
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};