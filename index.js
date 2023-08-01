// this index.js if for the SVG logo Maker
// this includes installing NodeJS Inquirer

// require the nodejs files
const inquirer = require('inquirer');
const fs = require('fs');
// for the shape classes
const ShapeCircle = require('./lib/shapehtml.js');
const ShapeSquare = require('./lib/shapehtml.js');
const ShapeTriangle = require('./lib/shapehtml.js');


// the filename to use is specified here
var filename = './lib/logo.svg';




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
            message: 'What is your preferred logo shape? Use up/down arrow and enter to select',
            name: 'shapeEl',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            message: 'What color would your like your shape to be? ',
            name: 'shapeColorEl',
        },
    ])
    .then((data) =>
    {
    switch (data.shapeEl) {
        case 'Circle':
            console.log('circle')
            var userLogo = ShapeCircle(data);
        break;
        case 'Square':
            console.log('square')
            var userLogo = ShapeSquare(data);
        break;
        default:
            console.log('triangle')
            var userLogo = ShapeTriangle(data);
        break;
    }
      fs.writeFile(filename,userLogo, (err) =>
      err ? console.log(err) : console.log('Generated logo.svg!'))

      fs.writeFile('index.html',userLogo, (err) =>
      err ? console.log(err) : console.log('Generated index.html'))
}
    );


   
    