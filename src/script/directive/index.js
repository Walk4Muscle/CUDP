let app = angular.module('app.Directive', []);

app.directive('menuLink', require('./MenuLink.directive.js'))
app.directive('menuToggle', require('./MenuToggle.directive.js'))
app.directive('statusDropdown', require('./StatusDropdown.directive.js'))
app.directive('selectPage', require('./selectPage.directive.js'));

app.directive('stSummary', function () {
    'use strict';
    return {
        require: '^stTable',
        template: '<span layout-padding>Showing {{ stRange.from }}-{{ stRange.to }} of {{ totalItemCount }} records</span>',
        link: function (scope, element, attrs, stTable) {
            scope.stRange = {
                from: null,
                to: null
            };
            scope.$watch('totalItemCount', () => {
                count()
            })
            scope.$watch('currentPage', () => {
                count()
            });
            let count = ()=>{
                var pagination = stTable.tableState().pagination;
                scope.stRange.from = pagination.start + 1;
                scope.stRange.to = scope.currentPage === pagination.numberOfPages ?
                    pagination.totalItemCount : (scope.stRange.from + scope.stItemsByPage - 1);
            }
        }
    };
})
module.exports = 'app.Directive';