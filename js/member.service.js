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
        'img_url': 'img/members/dick_durbin.png'
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
        'img_url': 'img/members/mark_kirk.png'
      },
      {
        'id': 2231,
        'position': 'Representative',
        'first_name': 'Jan',
        'last_name': 'Schakowsky',
        'party': 'Democrat',
        'state': 'Illinois',
        'district_name': 'Illinois\'s 9th',
        'office_start': 1999,
        'img_url': 'img/members/jan_schakowsky.png'
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
        'img_url': 'img/members/sherrod_brown.png'
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
        'img_url': 'img/members/rob_portman.png'
      },
      {
        'id': 3054,
        'position': 'Representative',
        'first_name': 'Brad',
        'last_name': 'Wenstrup',
        'party': 'Republican',
        'state': 'Ohio',
        'district_name': 'Ohio\'s 2nd',
        'office_start': 2013,
        'img_url': 'img/members/brad_wenstrup.png'
      }
    ];

    var searchResults = [
      {
        'member_id': 2993,
        'bill_votes': [
          {
            'id': 34,
            'title': 'Bill #34',
            'description': 'To destroy all libraries or some really long description to test out text wrapping on smaller screens',
            'vote': 'Nay',
            'with_party': true,
            'status': 'Failed'
          },
          {
            'id': 81,
            'title': 'Bill #81',
            'description': 'To build more libraries',
            'vote': 'Aye',
            'with_party': false,
            'status': 'Passed'
          }
        ],
        'bills': [
          {
            'id': 3,
            'title': 'Bill #3',
            'description': 'To get new computers for libraries',
            'sponsorship': 'co-sponsored',
            'status': 'Passed'
          },
          {
            'id': 13,
            'title': 'Bill #13',
            'description': 'To renovate old libraries',
            'sponsorship': 'co-sponsored',
            'status': 'First reading'
          },
          {
            'id': 412,
            'title': 'Bill #412',
            'description': 'To find new libraries',
            'sponsorship': 'sponsored',
            'status': 'In review'
          }
        ],
        'committees': [
          {
            'id': 12,
            'name': 'Bi-partisan Committee to Defend the Libraries',
            'description': 'Some description for the committee about defending the libraries. This should be long enough to test out the text wrapping on smaller screens'
          },
          {
            'id': 28,
            'name': 'Committee to Improve Literacy through Libraries',
            'description': 'Some description for the committee about improving literacy through libraries. This should be long enough to test out the text wrapping on smaller screens'
          },
        ]
      }
    ];

    return {
      query: function() {
        return members;
      },
      get: function(req) {
        var currentMember = members.find(function(member) {
          return member.id == req.id;
        });
        this.currentMember = currentMember;
        return currentMember;
      },
      currentMember: members[0],

      search: function(req) {
        var result = searchResults.find(function(result) {
          return result.member_id == req.member_id;
        });

        if (!req.search_votes)
          result.delete('bill_votes');
        if (!req.search_bills)
          result.delete('bills');
        if (!req.search_committees)
          result.delete('committees');

        return result;
      }
    };
  });