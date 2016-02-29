'use strict';

angular.module('team535.services')
  .factory('MemberService', function() {
    var members = [
      {
        'id': 300038,
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
        'id': 400222,
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
        'id': 400360,
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
        'id': 400050,
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
        'id': 400071,
        'position': 'Representative',
        'first_name': 'Steve',
        'last_name': 'Chabot',
        'party': 'Republican',
        'state': 'Ohio',
        'district_name': 'Ohio\'s 1st',
        'office_start': 2011,
        'img_url': 'img/members/steve_chabot.png'
      },
      {
        'id': 412565,
        'position': 'Representative',
        'first_name': 'Joyce',
        'last_name': 'Beatty',
        'party': 'Democrat',
        'state': 'Ohio',
        'district_name': 'Ohio\'s 3rd',
        'office_start': 2013,
        'img_url': 'img/members/joyce_beatty.png'
      },
      {
        'id': 412226,
        'position': 'Representative',
        'first_name': 'Jim',
        'last_name': 'Jordan',
        'party': 'Republican',
        'state': 'Ohio',
        'district_name': 'Ohio\'s 4th',
        'office_start': 2007,
        'img_url': 'img/members/jim_jordan.png'
      },
      {
        'id': 400325,
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
        'id': 412564,
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

    var overviewResults = [
      {
        'member_id': 400050,
        'votes': {
          'overall': 90,
          'with_party': 86,
        },
        'num_bills': 21,
        'issues': [
          {
            'name': 'Education',
            'rating': -0.8
          },
          {
            'name': 'Healthcare',
            'rating': -0.75
          },
          {
            'name': 'Immigration',
            'rating': -0.83
          }
        ]
      }
    ];

    var searchResults = [
      {
        'member_id': 400050,
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

    var timelineResults = [
      {
        'member_id': 400050,
        'events': [
          {
            'date': new Date(2016, 0, 28),
            'type': 'bill_vote',
            'title': 'Bill to reduce carbon emissions',
            'description': '',
            'vote': 'Aye',
            'with_party': true,
            'status': 'Second reading'
          },
          {
            'date': new Date(2016, 0, 26),
            'type': 'bill_vote',
            'title': 'Bill to build Mexican border fence',
            'description': '',
            'vote': 'Nay',
            'with_party': true,
            'status': 'Failed'
          },
          {
            'date': new Date(2016, 0, 25),
            'type': 'bill_vote',
            'title': 'Bill to make gun ownership mandatory',
            'description': '',
            'vote': 'Nay',
            'with_party': false,
            'status': 'Failed'
          },
          {
            'date': new Date(2016, 0, 23),
            'type': 'committee',
            'title': 'Joined committee to investigate Criss Angel',
            'description': 'Some committee description here hopefully',
            'vote': '',
            'with_party': null,
            'status': ''
          },
          {
            'date': new Date(2016, 0, 20),
            'type': 'bill_sponsor',
            'title': 'Co-sponsored bill to fire all mailmen',
            'description': 'Some description for the co-sponsored bill to fire all mailmen',
            'vote': '',
            'with_party': null,
            'status': 'In review'
          },
          {
            'date': new Date(2016, 0, 15),
            'type': 'bill_vote',
            'title': 'Bill to banish Michael Bay',
            'description': '',
            'vote': 'Aye',
            'with_party': true,
            'status': 'Passed'
          },
          {
            'date': new Date(2016, 0, 9),
            'type': 'bill_sponsor',
            'title': 'Sponsored bill to make Simlish a required course in school',
            'description': 'Description explaining significance of Simlish to society',
            'vote': '',
            'with_party': null,
            'status': 'Floor reading'
          },
          {
            'date': new Date(2016, 0, 6),
            'type': 'bill_vote',
            'title': 'Bill to nationalize all pizza production',
            'description': '',
            'vote': 'Nay',
            'with_party': false,
            'status': 'Died on floor'
          },
          {
            'date': new Date(2016, 0, 1),
            'type': 'bill_sponsor',
            'title': 'Sponsored bill to research flux capacitors',
            'description': 'Explanation of rationale for flux capacitor research',
            'vote': '',
            'with_party': null,
            'status': 'Passed'
          },
          {
            'date': new Date(2015, 11, 25),
            'type': 'bill_vote',
            'title': 'Bill to find Santa Claus',
            'description': '',
            'vote': 'Aye',
            'with_party': true,
            'status': 'Failed'
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

      overview: function(req) {
        /*
        var result = overviewResults.find(function(result) {
          return result.member_id == req.member_id;
        });
        */

        var result = overviewResults[0];

        return result;
      },

      search: function(req) {
        /*
        var result = searchResults.find(function(result) {
          return result.member_id == req.member_id;
        });
        */

        var result = searchResults[0];

        if (!req.search_votes)
          result.delete('bill_votes');
        if (!req.search_bills)
          result.delete('bills');
        if (!req.search_committees)
          result.delete('committees');

        return result;
      },

      timeline: function(req) {
        /*
        var result = timelineResults.find(function(result) {
          return result.member_id == req.member_id;
        });
        */
        var result = timelineResults[0];

        return result;
      }
    };
  });