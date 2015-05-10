app.controller("RoundCtrl", ["$scope", "$rootScope", "$firebaseArray",
    function ($scope, $rootScope, $firebaseArray) {
        var counter = 0;
        var myDataRef = new Firebase('https://burning-fire-1005.firebaseio.com/videos');

        var myArr = $firebaseArray(myDataRef);

        $rootScope.videos = myArr;

        //myArr.on('child_added', function () {})
    }

]);