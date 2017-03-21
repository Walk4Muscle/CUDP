let app = angular.module('app.Ctrl', []);

app.controller('homeCtrl',require('./homeCtrl'));
app.controller('subscriptionCtrl',require('./subscriptionCtrl'));
app.controller('LeftCtrl', require('./LeftCtrl'));
app.controller('UTDialogCtrl', require('./UTDialogCtrl'));


module.exports = 'app.Ctrl';