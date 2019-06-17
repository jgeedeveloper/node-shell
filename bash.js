process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'pwd') {
        process.stdout.write(process.argv[1]);
    } else {
        process.stdout.write('You typed: ' + cmd);
    }
    process.stdout.write('\nprompt > ');
});

