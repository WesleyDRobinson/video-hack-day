// define our app and dependencies (remember to include firebase!)
var app = angular.module("Orange2Orange", ["opentok", "firebase"]);

app.controller("PromptCtrl", ["$rootScope",
    function ($rootScope) {
        var loaded = false;


        var ref = new Firebase("https://burning-fire-1005.firebaseio.com/prompt");
        ref.remove();

        ref.on('value', function(snapshot) {
          if(snapshot.exists()) {
            $rootScope.recordMode = true;
            $rootScope.$broadcast('record mode');
            jQuery('#ziggeo_recorder').show();
            jQuery('#video_list').html('');
          }
          $rootScope.randoPrompt = snapshot.exists() ? snapshot.val() : "Example prompt: Dance like nobody is watching!";
        });

        var prompts = [
            "Without saying 'chopper' give us your best Arnold impersonation!",
            "Show us how you act when you're bored.",
            "What superpower would you give your mother?",
            "Strike a pose",
            "Show us Blue Steel",
            "Show us Robert DeNiro"
        ];



        $rootScope.getPrompt = function() {
          var number = Math.floor(Math.random() * prompts.length);
          ref.parent().child('videos').remove();
          ref.set(prompts[number]);
        };

    }
]);
