
app.controller("AuthCtrl", ["$scope", "Auth",
    function($scope, Auth) {

        $scope.login = function() {
            $scope.authData = null;
            $scope.error = null;

            Auth.$authAnonymously().then(function(authData) {
                $scope.authData = authData;
            }).catch(function(error) {
                $scope.error = error;
            });
        };

        $scope.auth = Auth;

        $scope.auth.$onAuth(function(authData) {
            $scope.authData = authData;
        });
    }
]);

app.factory("Auth", ["$firebaseAuth",
    function($firebaseAuth) {
        var ref = new Firebase("https://burning-fire-1005.firebaseio.com/");
        return $firebaseAuth(ref);
    }
]);