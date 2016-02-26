'use strict';

angular.module('team535.services')
  .factory('DistrictService', function() {
    var districts = [
      { 
        'id': 19, 
        'name': 'Illinois\'s 9th',
        'senators': [
        {
          'id': 1023,
          'rank': 'senior',
          'first_name': 'Dick',
          'last_name': 'Durbin',
          'party': 'Democrat',
          'office_start': 1997,
          'img_url': 'img/members/dick_durbin.jpg'
        },
        {
          'id': 4976,
          'rank': 'junior',
          'first_name': 'Mark',
          'last_name': 'Kirk',
          'party': 'Republican',
          'office_start': 2010,
          'img_url': 'img/members/mark_kirk.jpg'
        }],
        'representative': {
          'id': 2231,
          'first_name': 'Jan',
          'last_name': 'Schakowsky',
          'party': 'Democrat',
          'office_start': 1999,
          'img_url': 'img/members/jan_schakowsky.jpg'
        }
      },
      { 
        'id': 22, 
        'name': 'Ohio\'s 2nd',
        'senators': [
        {
          'id': 2993,
          'rank': 'senior',
          'first_name': 'Sherrod',
          'last_name': 'Brown',
          'party': 'Democrat',
          'office_start': 2007,
          'img_url': 'img/members/sherrod_brown.jpg'
        },
        {
          'id': 5302,
          'rank': 'junior',
          'first_name': 'Rob',
          'last_name': 'Portman',
          'party': 'Republican',
          'office_start': 2011,
          'img_url': 'img/members/rob_portman.jpg'
        }],
        'representative': {
          'id': 3054,
          'first_name': 'Brad',
          'last_name': 'Wenstrup',
          'party': 'Republican',
          'office_start': 2013,
          'img_url': 'img/members/brad_wenstrup.jpg'
        }
      },
    ];

    return {
      query: function() {
        return districts;
      },
      get: function(req) {
        return districts.find(function(district) {
          return district.id == req.id;
        });
      }
    };
  });