const inquirer = require('inquirer');


const answer = (answer) => {
  console.log(answer.a, typeof answer.a++);
  // console.log(answer.a++);
};

inquirer
  .prompt([
    {
      type: 'input',
      name: 'a',
      message: 'Enter the number'
    }
  ])
  .then(answer);
