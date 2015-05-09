
app.controller("AuthCtrl", ["$scope", "Auth", "$rootScope",
    function($scope, Auth, $rootScope) {



        $scope.login = function() {
            $rootScope.authData = null;
            $scope.error = null;

            Auth.$authAnonymously().then(function(authData) {
                $rootScope.authData = authData;
            }).catch(function(error) {
                $scope.error = error;
            });
        };

        $scope.auth = Auth;

        $scope.auth.$onAuth(function(authData) {
            $rootScope.authData = authData;
        });
    }
]);

app.factory("Auth", ["$firebaseAuth",
    function($firebaseAuth) {
        var ref = new Firebase("https://burning-fire-1005.firebaseio.com/");
        return $firebaseAuth(ref);
    }
]);