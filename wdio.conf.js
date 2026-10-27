require('dotenv').config();

exports.config = {
    runner: 'local',
    
    specs: [
        './test/specs/**/*.js'
    ],
    
    maxInstances: process.env.CI ? 1 : 2, 
    capabilities: [
        {
            browserName: 'chrome',
            maxInstances: 1,
            'goog:chromeOptions': {
                args: process.env.CI 
                    ? ['--headless', '--disable-gpu', '--disable-dev-shm-usage', '--no-sandbox'] 
                    : []
            }
        },
        {
            browserName: 'firefox',
            maxInstances: 1,
            'moz:firefoxOptions': {
                args: process.env.CI ? ['-headless'] : []
            }
        }
    ],

    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
