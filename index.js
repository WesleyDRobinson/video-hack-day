// define our app and dependencies (remember to include firebase!)
var app = angular.module("Orange2Orange", ["opentok", "firebase"]);

app.controller("PromptCtrl", ["$scope",
    function ($scope) {

        var ref = new Firebase("https://burning-fire-1005.firebaseio.com/prompt");

        ref.on('value', function(snapshot) {
          $scope.randoPrompt = snapshot.exists() ? snapshot.val() : "Example prompt: Dance like nobody is watching!";
          console.log($scope.randoPrompt);
        });

        var prompts = [
            "Without saying 'chopper' give us your best Arnold impersonation!",
            "Show us how you act when you're bored.",
            "What superpower would you give your mother?"
        ];

        $scope.getPrompt = function() {
          var number = Math.floor(Math.random() * prompts.length);
          ref.set(prompts[number]);
        };

    }
]);
