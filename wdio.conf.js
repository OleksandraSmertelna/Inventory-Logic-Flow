require('dotenv').config();

exports.config = {

    runner: 'local',
    
    specs: [
    './test/specs/**/*.js'
    ],
    
    maxInstances: 2,

    capabilities: [
        {
            browserName: 'firefox',
            maxInstances: 1
        },

        {
            browserName: 'MicrosoftEdge',
            maxInstances: 1
        }
    ],


    logLevel: 'error',
    
    bail: 0,
    
    baseUrl: 'https://www.saucedemo.com',
    
    waitforTimeout: 10000,
    
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,
    
    framework: 'mocha',
    
    reporters: [
    'spec',
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
