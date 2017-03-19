var app = angular.module('app.Srv', ['ngResource']);

app.factory('utilitySrv', require('./utilitySrv'));

app.factory('menu', ($location, $rootScope, CONST) => {
    let rawdata_section = (() => {
            let pages = [];
            for (let k in CONST.ALL_ENABLED_PLARFORMS) {
                pages.push({
                    name: CONST.ALL_ENABLED_PLARFORMS[k],
                    state: k,
                    type: 'link'
                })
            }
            return {
                name: 'Forum RawData',
                type: 'toggle',
                pages: pages
            }
        })()
        // let services_section = {
        //     name: 'Service API',
        //     type: 'toggle',
        //     pages: [{
        //         name: 'Spike',
        //         type: 'link',
        //         state: 'ServiceApi.Spike'
        //     }, {
        //         name: 'Regoin',
        //         type: 'link',
        //         state: 'ServiceApi.Regoin'
        //     }, {
        //         name: 'Similar Words',
        //         type: 'link',
        //         state: 'ServiceApi.SW'
        //     }, {
        //         name: 'Sentiment140',
        //         type: 'link',
        //         state: 'ServiceApi.Sentiment'
        //     }]
        // }
    let admin_scetion = {
        name: 'Admin Section',
        type: 'heading',
        children: [{
            name: 'User Management',
            type: 'link'
        }, {
            name: 'Service Account',
            type: 'link'
        }, {
            name: 'Notication Settings',
            type: 'link'
        }, ]
    }

    let sections = [{
        name: 'Thread List',
        type: 'heading',
        children: [{
            name: 'Thread List',
            type: 'link',
            state: '/'
        }]
    },{
        name: 'Statistics',
        type: 'heading',
        children: [{
            name: 'Reports',
            type: 'link',
            state: 'report'
        }]
    },{
        name: 'Settings',
        type: 'heading',
        children: [{
            name: 'Subscriptions',
            type: 'link',
            state: 'subscription'
        },{
            name: 'Profile',
            type: 'link',
            state: 'profile'
        }]
    }];

    let self;

    return self = {
        sections: sections,

        loadPage: (state) => {
            self.sections.forEach((section) => {
                section.children.forEach((page) => {
                    if (page.state == state) {
                        self.toggleSelectSection(section)
                        self.selectPage(page)
                        return;
                    }
                })
            })
        },

        toggleSelectSection: (section) => {
            self.openedSection = (self.openedSection === section ? null : section);
        },
        isSectionSelected: (section) => {
            return self.openedSection === section;
        },

        selectPage: (page) => {
            // page && page.url && $location.path(page.url);
            // self.currentSection = section;
            self.currentPage = page;
        },

        isPageSelected: (page) => {
            return self.currentPage === page;
        }
    };

    function sortByHumanName(a, b) {
        return (a.humanName < b.humanName) ? -1 :
            (a.humanName > b.humanName) ? 1 : 0;
    }
})

app.factory('API', ($resource, CONST) => {
    let baseUrl = CONST.DEV_MODE ? CONST.SERVICE_INFO.LOCAL_TEST_DATA : CONST.SERVICE_INFO.ENDPOINT;
    let Acomcode = $resource(baseUrl + 'acomcode/:id', {
        id: '@id'
    }, {
        query: {
            transformResponse: function (data, headers) {
                return JSON.parse(data);
            }
        },
        queryAll: {

        }
    });

    let Platform = $resource(baseUrl + 'platform', {},{
        query: {
            isArray: true,
            cache: true
        }
    })
    let Product = $resource(baseUrl + 'product', {})
    let Process = $resource(baseUrl + 'process', {}, {
        query: {
            cache: true,
            isArray: true,
            transformResponse: function (data, headers) {
                return JSON.parse(data).split(",");
            }
        },
        save: {
            method: 'POST',
            interceptor: {
                response: function (response) {
                    var result = response.resource;
                    result.$status = response.status;
                    return result;
                }
            }
        }
    });
    let IssueStatus = $resource(baseUrl + 'IssueStatus', {}, {
        query: {
            isArray: true,
            transformResponse: function (data, headers) {
                return JSON.parse(data).split(",");
            }
        }
    });
    let UT = $resource(baseUrl + 'ut');
    let Commit = $resource(baseUrl + 'Commit',{},{
        query: {
            transformResponse: function (data, headers) {
                return JSON.parse(data);
            }
        },
    });
    let IssueViews = $resource(baseUrl + 'IssueViews',{},{
        query: {
            transformResponse: function (data, headers) {
                return JSON.parse(data);
            }
        },
    });
    let CodeOwner = $resource(baseUrl + 'CodeOwner', {}, {
        save: {
            method: 'POST',
            interceptor: {
                response: function (response) {
                    var result = response.resource;
                    result.$status = response.status;
                    return result;
                }
            }
        }
    });
    return {
        Acomcode: Acomcode,
        Platform: Platform,
        Product: Product,
        Process: Process,
        IssueStatus: IssueStatus,
        UT: UT,
        Commit:Commit,
        IssueViews: IssueViews,
        CodeOwner: CodeOwner
    }
})

module.exports = 'app.Srv';