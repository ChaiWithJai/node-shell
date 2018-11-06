const pwd = require('./pwd');

// pwd()

const ls = require('./ls');
// ls()


process.stdout.write('prompt >');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'pwd') {
        pwd();
    }
    if (cmd === 'ls') {
        ls();
    }
    //process.stdout.write(cmd);
});