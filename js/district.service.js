'use strict';

angular.module('team535.services')
  .factory('DistrictService', function() {
    return {
      query: function(callback) {
        // mock service
        return [
          { 
            'id': 19, 
            'name': 'Illinois\'s 9th',
            'senators': [
            {
              'id': 1023,
              'rank': 'senior',
              'first_name': 'Dick',
              'last_name': 'Durbin',
              'party': 'Democrat'
            },
            {
              'id': 4976,
              'rank': 'junior',
              'first_name': 'Mark',
              'last_name': 'Kirk',
              'party': 'Republican'
            }],
            'representative': {
              'id': 2231,
              'first_name': 'Jan',
              'last_name': 'Schakowsky',
              'party': 'Democrat'
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
              'party': 'Democrat'
            },
            {
              'id': 5302,
              'rank': 'junior',
              'first_name': 'Rob',
              'last_name': 'Portman',
              'party': 'Republican'
            }],
            'representative': {
              'id': 3054,
              'first_name': 'Brad',
              'last_name': 'Wenstrup',
              'party': 'Republican'
            }
          },
        ];
      },
    }
  });