// this index.js if for the ReadMe Generator project
// this includes installing NodeJS Inquirer

// require the nodejs files
const inquirer = require('inquirer');
const fs = require('fs');
//const { createDocument } = require('./lib/document');
const  generateHTML = require('./lib/posthtml.js');
//const html = require('index.html');


// the filename to use is specified here
var filename = 'logo.svg';




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
    {
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Generated logo.svg')
        );

        const htmlPageContent = generateHTML(data);
        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    

        fs.writeFile(filename,htmlPageContent, (err) =>
           err ? console.log(err) : console.log('Generated logo.svg!')
        );
    });