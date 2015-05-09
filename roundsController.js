app.controller("RoundCtrl", ["$scope", "$rootScope", "$firebaseArray",
    function ($scope, $rootScope, $firebaseArray) {
        var counter = 0;
        var myDataRef = new Firebase('https://burning-fire-1005.firebaseio.com/videos');

        var myArr = $firebaseArray(myDataRef);

        myArr.$add({user: "Wesley", video: "newtoken234567"}).then(function(ref) {
            var id = ref.key();
            console.log("added record with id " + id);
            myArr.$indexFor(id); // returns location in the array
        });

        $rootScope.videos = myArr;

        myArr.on('child_added', function () {

        });

    }
]);