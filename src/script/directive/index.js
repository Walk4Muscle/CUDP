
let app = angular.module('app.Directive', []);

app.directive('menuLink',require('./MenuLink.directive.js'))
app.directive('menuToggle',require('./MenuToggle.directive.js'))
app.directive('statusDropdown',require('./StatusDropdown.directive.js'))
app.directive('selectPage', require('./selectPage.directive.js'));

module.exports = 'app.Directive';