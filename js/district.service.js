'use strict';

angular.module('team535.services')
  .factory('DistrictService', function() {
    var districts = [
      { 
        'id': 21, 
        'name': 'Ohio\'s 1st',
        'senators': [
        {
          'id': 400050,
          'rank': 'senior',
          'first_name': 'Sherrod',
          'last_name': 'Brown',
          'party': 'Democrat',
          'office_start': 2007,
          'img_url': 'img/members/sherrod_brown.png'
        },
        {
          'id': 400325,
          'rank': 'junior',
          'first_name': 'Rob',
          'last_name': 'Portman',
          'party': 'Republican',
          'office_start': 2011,
          'img_url': 'img/members/rob_portman.png'
        }],
        'representative': {
          'id': 400071,
          'first_name': 'Steve',
          'last_name': 'Chabot',
          'party': 'Republican',
          'office_start': 2011,
          'img_url': 'img/members/steve_chabot.png'
        }
      },
      { 
        'id': 23, 
        'name': 'Ohio\'s 3rd',
        'senators': [
        {
          'id': 400050,
          'rank': 'senior',
          'first_name': 'Sherrod',
          'last_name': 'Brown',
          'party': 'Democrat',
          'office_start': 2007,
          'img_url': 'img/members/sherrod_brown.png'
        },
        {
          'id': 400325,
          'rank': 'junior',
          'first_name': 'Rob',
          'last_name': 'Portman',
          'party': 'Republican',
          'office_start': 2011,
          'img_url': 'img/members/rob_portman.png'
        }],
        'representative': {
          'id': 412565,
          'first_name': 'Joyce',
          'last_name': 'Beatty',
          'party': 'Democrat',
          'office_start': 2013,
          'img_url': 'img/members/joyce_beatty.png'
        }
      },
      { 
        'id': 24, 
        'name': 'Ohio\'s 4th',
        'senators': [
        {
          'id': 400050,
          'rank': 'senior',
          'first_name': 'Sherrod',
          'last_name': 'Brown',
          'party': 'Democrat',
          'office_start': 2007,
          'img_url': 'img/members/sherrod_brown.png'
        },
        {
          'id': 400325,
          'rank': 'junior',
          'first_name': 'Rob',
          'last_name': 'Portman',
          'party': 'Republican',
          'office_start': 2011,
          'img_url': 'img/members/rob_portman.png'
        }],
        'representative': {
          'id': 412226,
          'first_name': 'Jim',
          'last_name': 'Jordan',
          'party': 'Republican',
          'office_start': 2007,
          'img_url': 'img/members/jim_jordan.png'
        }
      }
    ];

    var savedDistricts = [
      { 
        'id': 19, 
        'name': 'Illinois\'s 9th',
        'senators': [
        {
          'id': 300038,
          'rank': 'senior',
          'first_name': 'Dick',
          'last_name': 'Durbin',
          'party': 'Democrat',
          'office_start': 1997,
          'img_url': 'img/members/dick_durbin.png',
			'logo_url': 'img/logo/dem2_logo.jpg'

        },
        {
          'id': 400222,
          'rank': 'junior',
          'first_name': 'Mark',
          'last_name': 'Kirk',
          'party': 'Republican',
          'office_start': 2010,
          'img_url': 'img/members/mark_kirk.png',
			'logo_url': 'img/logo/rep2_logo.png'

        }],
        'representative': {
          'id': 400360,
          'first_name': 'Jan',
          'last_name': 'Schakowsky',
          'party': 'Democrat',
          'office_start': 1999,
          'img_url': 'img/members/jan_schakowsky.png',
			'logo_url': 'img/logo/dem2_logo.jpg'

        }
      },
      { 
        'id': 22, 
        'name': 'Ohio\'s 2nd',
        'senators': [
        {
          'id': 400050,
          'rank': 'senior',
          'first_name': 'Sherrod',
          'last_name': 'Brown',
          'party': 'Democrat',
          'office_start': 2007,
          'img_url': 'img/members/sherrod_brown.png',
			'logo_url': 'img/logo/dem2_logo.jpg'

        },
        {
          'id': 400325,
          'rank': 'junior',
          'first_name': 'Rob',
          'last_name': 'Portman',
          'party': 'Republican',
          'office_start': 2011,
          'img_url': 'img/members/rob_portman.png',
			'logo_url': 'img/logo/rep2_logo.png'

        }],
        'representative': {
          'id': 412564,
          'first_name': 'Brad',
          'last_name': 'Wenstrup',
          'party': 'Republican',
          'office_start': 2013,
          'img_url': 'img/members/brad_wenstrup.png',
			'logo_url': 'img/logo/rep2_logo.png'

        }
      },
    ];

    return {
      query: function() {
        // should return all districts
        return districts;
      },

      querySavedDistricts: function() {
        return savedDistricts;
      },
      getSavedDistrict: function(req) {
        var currentDistrict = savedDistricts.find(function(district) {
          return district.id == req.id;
        });
        this.currentDistrict = currentDistrict;
        return currentDistrict;
      },
      currentDistrict: savedDistricts[0],

      saveDistrict: function(district_id) {
        var newDistrict = districts.find(function(district) {
          return district.id == district_id;
        });

        var index = districts.indexOf(newDistrict);
        districts.splice(index, 1);
        
        savedDistricts.push(newDistrict);
        this.currentDistrict = newDistrict;
      }
    };
  });