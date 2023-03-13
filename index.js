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

const team =[]

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

    team.push(manager)

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
      addEngineer();
    } else if (answers.menu === "intern") {
      addIntern();
    } else if (answers.menu === "Finish building the team") {
      const html = render(team)

      console.log(html)
    }
  })
  .catch((error) => {
    console.log(error);
  });

}

const addEngineer = () => {
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
      team.push(engineer)
      selectUsersFromMenu();
    });
}

const addIntern = () => {
  console.log('Please enter the following information for the intern:');
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Intern's name:",
      },
      {
        type: 'input',
        name: 'id',
        message: "Intern's ID:",
      },
      {
        type: 'input',
        name: 'email',
        message: "Intern's email address:",
      },
      {
        type: 'input',
        name: 'school',
        message: "Intern's school:",
      },
    ])
    .then((answers) => {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
     
      
      console.log(intern);
      team.push(intern)
      selectUsersFromMenu();
    });
}
