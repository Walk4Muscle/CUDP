module.exports = function ($scope) {
	$scope.subscriptions = [{
		name: 'Subscription 1',
		platfroms: 'SO,SU,SF',
		topic: 'Azure All'
	}, {
		name: 'Subscription 2',
		platfroms: 'PowerBI',
		topic: 'SQL Server'
	}, {
		name: 'Subscription 1',
		platfroms: 'SO,SU,SF',
		topic: 'Azure All'
	}, {
		name: 'Subscription 2',
		platfroms: 'PowerBI',
		topic: 'SQL Server'
	}];

	$scope.availablePlatform = ['SO', 'SF', 'SU', 'PowerBI', 'PowerApp']
	$scope.availableTopic = ['Azure All', 'UWP All', 'Dev Tool', 'SQL Server']

	$scope.form = {
		name:undefined,
		selectPlatforms:[]
	}
	$scope.querySearch = (query, type) => {
		let lowercaseQuery = angular.lowercase(query);
		let array = type.toLowerCase()==='platform'?$scope.availablePlatform:$scope.availableTopic;
		let results = lowercaseQuery ? queryInArray(array,lowercaseQuery) : [];
		return results;
	}
	$scope.addToChips = (item,type) => {
		let array = type.toLowerCase()==='platform'?$scope.form.selectPlatforms:$scope.form.selectPlatforms;
		if(array.indexOf(item)===-1)array.push(item);
	}
	let queryInArray = (array,query)=>{
		let tmp = []
		angular.forEach(array, (item)=>{
			if(item.toLowerCase().indexOf(query) !== -1){
				tmp.push(item);
			}
		})
		return tmp;
	}
}