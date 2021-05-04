const chalk = require('chalk');
const figlet = require('figlet');

module.exports = {

  title: async text => new Promise((resolve, reject) => {
    figlet(text,  (err, data) => {
      if (err) {
        reject();
      } else {
        console.log(data);
        resolve();
      }
    })
  }),

  success: (name, path) => console.log(`
    ${chalk.green("Success!!")}
    Created ${chalk.yellow(name)} at ${chalk.yellow(path + '/' + name)}
    
      ${chalk.cyanBright('yarn start')}
        Starts the server from dist folder
    
      ${chalk.cyanBright('yarn dev')}
        Starts the development server
    
      ${chalk.cyanBright('yarn clean')}
        Removes the dist folder
    
      ${chalk.cyanBright('yarn build')}
        Builds server to dist folder
    
      ${chalk.cyanBright('yarn test')}
        Runs all tests (jest)
    
      ${chalk.cyanBright("Get started:")}
    
        $ cd ${chalk.yellow(name)} && yarn
        $ yarn dev
    
    ${chalk.green("Happy coding!")}  
  `),

  progress: text => console.log(chalk.yellow(text))
};