'use strict';

angular.module('team535.services')
  .factory('MemberService', function() {
    var members = [
      {
        'id': 1023,
        'position': 'Senator',
        'rank': 'senior',
        'first_name': 'Dick',
        'last_name': 'Durbin',
        'party': 'Democrat',
        'state': 'Illinois',
        'office_start': 1997,
        'img_url': 'img/members/dick_durbin_lg.jpg'
      },
      {
        'id': 4976,
        'position': 'Senator',
        'rank': 'junior',
        'first_name': 'Mark',
        'last_name': 'Kirk',
        'party': 'Republican',
        'state': 'Illinois',
        'office_start': 2010,
        'img_url': 'img/members/mark_kirk_lg.jpg'
      },
      {
        'id': 2231,
        'position': 'Representative',
        'first_name': 'Jan',
        'last_name': 'Schakowsky',
        'party': 'Democrat',
        'state': 'Illinois',
        'district_id': 19,
        'office_start': 1999,
        'img_url': 'img/members/jan_schakowsky_lg.jpg'
      },
      {
        'id': 2993,
        'position': 'Senator',
        'rank': 'senior',
        'first_name': 'Sherrod',
        'last_name': 'Brown',
        'party': 'Democrat',
        'state': 'Ohio',
        'office_start': 2007,
        'img_url': 'img/members/sherrod_brown_lg.jpg'
      },
      {
        'id': 5302,
        'position': 'Senator',
        'rank': 'junior',
        'first_name': 'Rob',
        'last_name': 'Portman',
        'party': 'Republican',
        'state': 'Ohio',
        'office_start': 2011,
        'img_url': 'img/members/rob_portman_lg.jpg'
      },
      {
        'id': 3054,
        'position': 'Representative',
        'first_name': 'Brad',
        'last_name': 'Wenstrup',
        'party': 'Republican',
        'state': 'Ohio',
        'district_id': 22,
        'office_start': 2013,
        'img_url': 'img/members/brad_wenstrup_lg.jpg'
      }
    ];

    return {
      query: function() {
        return members;
      },
      get: function(req) {
        return members.find(function(member) {
          return member.id == req.id;
        });
      }
    };
  });