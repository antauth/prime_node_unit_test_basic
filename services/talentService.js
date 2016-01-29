/**
 * Created by antoinette on 1/29/16.
 */
var Talent = require('../models/talent');

var TalentService = {
  findAll: function(callback) {
    Talent.find({}, function(err, talent) {
      if(err) {
        callback({message: 'No records found'});
      }
      callback(talent);
    });
  }
};

module.exports = TalentService;