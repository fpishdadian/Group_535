# Team 535

This is an experimental user interface for searching Congress members created for EECS 330: Human Computer Interaction class at Northwestern University.

### Installation

To get the app running locally:

```sh
$ git clone [git-repo-url] team535
$ cd team535
$ python -m SimpleHTTPServer
```

Then point the browser to http://localhost:8000/index.html

weiwei:

I don't why it messed up many things, when I make the following changes:

SO I could not leve it in the code and push it.

in .css
.overview-results{
  margin: 15px 5px !important;
}


In .controller.js
  .controller('MemberOverviewCtrl', function($scope, MemberService) {
    $scope.controllerName = 'MemberOverviewCtrl';

    $scope.member = MemberService.currentMember;
    $scope.overviewResults = MemberService.overview({
      member_id: $scope.member.id
    });


  })




In service.js


    var overviewResults = [
      {
        'member_id': 2993,
        'overview_percentage': [
        {
          'vote_on_bills' : 'Votes on 83% of bills',
          'vote_with_party': 'Votes with party 95% of the time',
          'sponsor': 'Sponsored/co-sponsored 38 bills'

          'major':'Major Issues:',
          'Issue1':'Education',
          'Issue2':'Healthcare',
          'Issue3' : 'Imigration'

        }

        ]
      }
      ];



     timeline: function(req) {
        var result = timelineResults.find(function(result) {
          return result.member_id == req.member_id;
        });

        return result;
      }

       overview: function(req) {
        var result = overviewResults.find(function(result) {
          return result.member_id == req.member_id;
        });

        return result;
      }


