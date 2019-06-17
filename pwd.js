module.exports = function pwd() {
  return process.stdout.write(process.argv[1]);
};
