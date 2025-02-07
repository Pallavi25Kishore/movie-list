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

  create: function(params, callback) {
    var queryString = 'INSERT INTO movielist (title, watched, info) VALUES (?, 0, 0)';
    db.query(queryString, params, (err, result) => {
      if (err) {
        callback(err);
      } else {
        console.log('result', result);
        callback(null, result);
      }
    })
  },

  updatewatched: function(params, callback) {
    var queryString = 'UPDATE movielist SET watched = watched XOR 1 WHERE id = ?';
    db.query(queryString, params, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },

  updateinfo: function(params, callback) {
    var queryString = 'UPDATE movielist SET info = info XOR 1 WHERE id = ?';
    db.query(queryString, params, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },
};