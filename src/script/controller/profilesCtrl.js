module.exports = function ($scope, $rootScope, $stateParams, $location) {
    console.log($stateParams)
    console.log($location.hash())

    $scope.connect2SE = () =>{
        window.location = 'https://stackexchange.com/oauth/dialog?client_id=9266&scope=no_expiry,read_inbox&redirect_uri=http://localhost:8998/profile/se'
    }
}