const core = require("@actions/core");
const github = require("@actions/github");

try {
    core.debug('Debug message')
    core.warning('Warning message')
    core.error('Error message')

    const name = core.getInput("who-to-greet");
    core.setSecret(name) // will mask data -> ****
    console.log(`Hello ${name}`);

    const time = new Date();
    core.setOutput("time", time.toTimeString());

    core.startGroup('Logging github object') // enable expanding and collapsing data
    console.log(JSON.stringify(github, null, "\t"));
    core.endGroup()

    core.exportVariable('HELLO', 'hello')
} catch (e) {
    core.setFailed(e.message);
}
