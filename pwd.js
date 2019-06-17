module.exports = function pwd() {
  process.stdout.write(process.argv[1]);
  process.stdout.write('\nprompt > ');
};
