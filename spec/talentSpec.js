/**
 * Created by antoinette on 1/29/16.
 */
var Talent = require('../models/talent');
var TalentService = require('../services/talentService');

describe('GET /talent', function() {
  it('gets a number of talent', function(done) {
    spyOn(Talent, 'find').and.callFake(function(query, callback) {
      callback(null, [
        {username: 'Matt', _id: '123'},
        {username: 'Linda', _id: '789'}
      ]);
    });
    TalentService.findAll(function(response) {
      expect(response).toEqual([
        {username: 'Matt', _id: '123'},
        {username: 'Linda', _id: '789'}
      ]);
      done();
    });
  });

  it('returns an error', function(done) {
    spyOn(Talent, 'find').and.callFake(function(query, callback) {
      callback(true, null);
    });
    TalentService.findAll(function(response) {
      expect(response).toEqual({message: 'No records found'});
      done();
    });
  });
});