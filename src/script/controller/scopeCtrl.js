module.exports = function ($scope, $rootScope) {
	$scope.availablePlatform = ['SO', 'SF', 'SU', 'PowerBI', 'PowerApp']
	$scope.availableTopic = ['Azure All', 'UWP All', 'Dev Tool', 'SQL Server']

	$scope.selectedPlatforms = [];
	$scope.selectedTopics = [];
	$scope.toggle = (item, list) => {
		var idx = list.indexOf(item);
		if (idx > -1) {
			list.splice(idx, 1);
		} else {
			list.push(item);
		}
	};

	$scope.exists = (item, list) => {
		return list.indexOf(item) > -1;
	};

	$scope.isIndeterminate = (selected, from) => {
		return (selected.length !== 0 &&
			selected.length !== from.length);
	};

	$scope.isChecked = (selected, from) => {
		return selected.length === from.length;
	};

	$scope.toggleAll = (selected, from) => {
		if ($scope[selected].length === $scope[from].length) {
			$scope[selected] = [];
		} else if ($scope[selected].length === 0 || $scope[selected].length > 0) {
			$scope[selected] = $scope[from].slice(0);
		}
	};
}