var db = require('../db/index.js');

module.exports = {
  getAll: function(callback) {
    var queryString = 'SELECT * FROM movielist';
    db.query(queryString, function (err, results) {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  create: function() {

  },

  update: function() {

  }
};