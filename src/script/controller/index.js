let app = angular.module('app.Ctrl', []);

app.controller('homeCtrl',require('./homeCtrl'));
app.controller('LeftCtrl', require('./LeftCtrl'));


module.exports = 'app.Ctrl';