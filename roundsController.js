app.controller("RoundCtrl", ["$scope", "$rootScope",
    function ($scope, $rootScope) {
        var counter = 0;
        var myDataRef = new Firebase('https://burning-fire-1005.firebaseio.com/');

        myDataRef.push({
            round : counter,
            prompt: $rootScope.randoPrompt,
            videos: [],
            winner: ''
        });



    }
]);