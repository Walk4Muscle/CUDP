module.exports = function ($scope, $rootScope, $http, $timeout) {
	$scope.message = 'This is starter';
	$scope.getData = () => {
		$scope.isLoading = true;
		$http.get('/data/thread.json').then((result) => {
			$scope.list = result.data;
			$scope.isLoading = false;
		})
	}
	$scope.openMenu = function ($mdOpenMenu, ev) {
		originatorEv = ev;
		$mdOpenMenu(ev);
	};
	$timeout(() => {
		$scope.getData()
	}, 50)
}