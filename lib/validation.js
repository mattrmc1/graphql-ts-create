const chalk = require('chalk');

module.exports = {

  ValidateChildProcess: code => {
    if (code === 0) return;

    switch (code) {
      case 0: return;
      case 128:
        console.log(chalk.red("Unable to create containing folder by this name"));
        process.exit();
      default:
        console.error(code);
        process.exit();
    }
  },

  ValidateGitRemoval: err => {
    if (!err) return;

    console.log(chalk.red('An error occurred during cleanup'));
    process.exit();
  }
};