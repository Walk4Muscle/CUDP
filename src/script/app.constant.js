var app = angular.module('app.Constant', []);

app.value('CONST', {
    APP_NAME: 'CSS Universal Deliver Platform',
    APP_NAME_SHORT: 'CUDP',
    DEV_MODE:false,
    SERVICE_INFO: {
        ENDPOINT: 'http://10.168.177.60:8008/api/',
        LOCAL_TEST_DATA: '/data/'
    },
    WS_STATUS: {
        0: 'connecting',
        1: 'online',
        2: 'closing',
        3: 'offline'
    },
    ERRORS: {
        "1": 'No Data Available',
        "2": 'Null',
        "3": 'N/A',
    },
    ISSUE_STATUS:['Waiting On Customer','Solution Deliver','Escalated','Pending on Research','Self-Answered','OffTopic','Deleted','New Issue'],
    ISSUE_STATUS_COLOR:['grey-900','green','grey-600','yellow-A400','green','grey','grey','blue'],
})

module.exports = 'app.Constant';