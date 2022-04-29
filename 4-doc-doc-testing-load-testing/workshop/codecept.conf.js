const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure')

const { cwd } = require('process')

setHeadlessWhen(process.env.HEADLESS)
setCommonPlugins()

exports.config = {
    tests: './test/**/e2e-test.test.js',
    output: 'dist',
    //   include: {
    //     I: './steps_file.js'
    //   },
    helpers: {
        Playwright: {
            waitForTimeout: 15000,
            show: process.env.HEADLESS === 'true' ? false : true,
            timeout: 15000,
        },
        REST: {},
    },
    bootstrap: null,
    mocha: {},
    name: 'e2e-test',
}
