// this index.js if for the ReadMe Generator project
// this includes installing NodeJS Inquirer

// require the nodejs files
const inquirer = require('inquirer');
const fs = require('fs');
//const { createDocument } = require('./lib/document');


// the filename to use is specified here
var filename = 'logo.svg';
var shapeAttrib = "";
var shapeString = "";

const generateHTML = ({ charEl, textColorEl }) =>


    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
    <!-- Link the JQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <title>SVG Log Maker</title>
</head>
<body>
  <header class="logo">
   <div id="container">
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

     ${shapeAttrib}

    <text x="145" y="135" font-size="30" text-anchor="middle" fill=${textColorEl}>${charEl}</text>
    </svg>
   </div>
  </header>
</body>
</html>`
    ;

// Ask user information to put in the README file
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter up to 3 characters for your logo  ',
            name: 'charEl',
        },
        {
            type: 'input',
            message: 'What color would your like your text to be? ',
            name: 'textColorEl',
        },
        {
            type: 'list',
            message: 'What is your preferred logo shape?',
            name: 'shapeEl',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            message: 'What color would your like your shape to be? ',
            name: 'shapeColorEl',
        },
    ])
    .then((data) =>

    //the actual call to write the user input to the README.md file
    {
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Generated logo.svg')
        );
        shapeString = data.shapeColorEl
        if (shapeEl = 'circle') {
            shapeAttrib = '<circle cx="150" cy="120" r="80" fill=' + shapeString + '> </circle>'
        } else
            if (shapeEl = 'triangle') {
                shapeAttrib = '<polygon points="150,10 200,182 60,182" style='+ shapeString + '> </polygon>'
            }
            else
                if (shapeEl = 'triangle') {
                    shapeAttrib = '<rect x="50" y="40" width="200" height="260" style='+ shapeString + '> </rect>'
                }


        const htmlPageContent = generateHTML(data);
        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });