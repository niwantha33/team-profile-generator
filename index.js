const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// user modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


// outputs 
const OUTPUT_DIR = path.resolve(__dirname, "output");

const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the team manager's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the team manager's email?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the team manager's office number?",
    }
  ])
  .then((answers) => {

    console.log("Team profile generated!" + answers.name);
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);

    console.log(manager);
    selectUsersFromMenu();   

  });

const selectUsersFromMenu = () => {

  inquirer
  .prompt([
    {
      type: "list",
      name: "menu",
      message: "Please select an option:",
      choices: ["engineer", "intern", "Finish building the team"],
    },
  ])
  .then((answers) => {
    if (answers.menu === "engineer") {
      Engineer();
    } else if (answers.menu === "intern") {
      // Handle adding an intern
    } else if (answers.menu === "Finish building the team") {
      // Handle finishing building the team
    }
  })
  .catch((error) => {
    console.log(error);
  });

}

const Engineer = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Engineer's name:",
      },
      {
        type: 'input',
        name: 'id',
        message: "Engineer's employee ID:",
      },
      {
        type: 'input',
        name: 'email',
        message: "Engineer's email address:",
      },
      {
        type: 'input',
        name: 'github',
        message: "Engineer's GitHub username:",
      },
    ])
    .then((engineerAnswers) => {
      const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
      console.log(engineer)
    });
}