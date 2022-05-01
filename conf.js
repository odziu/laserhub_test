exports.config = {
    baseUrl: 'https://app.laserhub.com/login',
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        'browserName': 'chrome'
    },
    directConnect: true,
    chromeDriver: './node_modules/chromedriver/lib/chromedriver/chromedriver.exe',
    suites: {
        full: [
            'specs/*_spec.js'
        ]
    },
    framework: 'jasmine2' ,
    onPrepare: function() {
        let log4js = require('log4js');
        log4js.configure({
            appenders: {
                out: {
                    type: 'stdout',
                    layout: {
                        type: 'pattern',
                        pattern: '%d %[ %c %m%n %]'
            }}},
            categories: { default: { appenders: ['out'], level: 'info' } }
        });
        logger = log4js.getLogger('-');
        logger.level = 'trace';
        
        let jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
        );
        let ConsoleReporter = require('jasmine2-reporter').Jasmine2Reporter;
        let console_reporter_options = {
            startingSpec: true
        };
        jasmine.getEnv().addReporter(new ConsoleReporter(console_reporter_options));
    }
};