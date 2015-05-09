
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

        $scope.logout = function() {
          Auth.$unauth();
          $scope.$broadcast('logout');
        };

        $scope.auth = Auth;

        $scope.auth.$onAuth(function(authData) {
            $scope.authData = authData;
            if(authData) $scope.$broadcast('authorized!');
        });
    }
]);

app.factory("Auth", ["$firebaseAuth",
    function($firebaseAuth) {
        var ref = new Firebase("https://burning-fire-1005.firebaseio.com/");
        return $firebaseAuth(ref);
    }
]);
