var app = angular.module('app.Constant', []);

app.value('CONST', {
    APP_NAME: 'Top For Agent Support Tool',
    APP_NAME_SHORT: 'FAST',
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
    ISSUE_STATUS:['Waiting On Customer','Answered','Solution Deliver','Escalated','Pending on Research','Self-Answered','OffTopic','Deleted In SO','New Issue'],
    ISSUE_STATUS_COLOR:['grey-900','green','green','grey-600','deep-orange','green','grey-600','grey-600','blue'],
})

module.exports = 'app.Constant';