module.exports = function ($scope) {
	$scope.subscriptions = [{
		name:'Subscription 1',
		platfroms:'SO,SU,SF',
		topic:'Azure All'
	},{
		name:'Subscription 2',
		platfroms:'PowerBI',
		topic:'SQL Server'
	},{
		name:'Subscription 1',
		platfroms:'SO,SU,SF',
		topic:'Azure All'
	},{
		name:'Subscription 2',
		platfroms:'PowerBI',
		topic:'SQL Server'
	}];

	$scope.availablePlatform = ['SO','SF','SU','PowerBI','PowerApp']
	$scope.availableTopic = ['Azure All','UWP All','Dev Tool','SQL Server']
}