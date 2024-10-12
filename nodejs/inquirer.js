const inquirer = require('inquirer');

const answer = (answer) => {
  console.log(answer.a, typeof answer.a);
};

inquirer
  .prompt([
    {
      type: 'number',
      name: 'a',
      message: 'Enter the option'
    }
  ])
  .then(answer);
