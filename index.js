#!/usr/bin/env node
const exec = require("child_process").exec;
const rmrf = require('rimraf');

const { GIT_REPOSITORY, TITLE } = require('./lib/constants');
const { getProjectName } = require('./lib/inquirer');
const { title, success, progress } = require('./lib/print');
const { ValidateChildProcess, ValidateGitRemoval } = require('./lib/validation');

const run = async () => {

  console.clear();

  await title(TITLE);
  const name = await getProjectName();

  progress('Attempting to create template...');

  exec(`git clone ${GIT_REPOSITORY} ${name}`)
    .on('close', code => {

      ValidateChildProcess(code)

      progress('Cleaning up...');

      const pathToDelete = `${process.cwd()}/${name}/.git`;
      rmrf(
        pathToDelete,
        {},
        err => {
          ValidateGitRemoval(err);
          success(name, process.cwd())
        }
      );
    })
}

run();