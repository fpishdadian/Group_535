'use strict';

angular.module('team535.services')
  .factory('DistrictService', function() {
    var districts = [
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
        return districts;
      },
      get: function(req) {
        var currentDistrict = districts.find(function(district) {
          return district.id == req.id;
        });
        this.currentDistrict = currentDistrict;
        return currentDistrict;
      },
      currentDistrict: districts[0]
    };
  });