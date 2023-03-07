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
    },

//   .then((data) => {
//     const manager = new Manager(
//       data.name,
//       data.id,
//       data.email,
//       data.officeNumber
//     );  
    
    
//   });

    {
      type: "confirm",
      name: "again",
      message: "Do you want to add another employee?",
    },
  ])
  .then((again) =>{

  if (again) {
    console.log(again);
  } else {
    // Generate HTML here
    console.log("Team profile generated!");
  }
})
