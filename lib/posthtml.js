const generateHTML = ({ charEl, shapeEl, textColorEl, shapeColorEl}) =>
{
var shapeAttrib = "";
var shapeString = "";

shapeString = shapeColorEl;
if (shapeEl = 'circle') {
  shapeAttrib = '<circle cx="150" cy="120" r="80" fill=' + shapeString + '> </circle>'
} else {
  if (shapeEl = 'triangle') {
      shapeAttrib = '<polygon points="150,10 200,182 60,182" style=' + shapeString + '> </polygon>'
  }
   else {
    if (shapeEl = 'triangle') {
        shapeAttrib = '<rect x="50" y="40" width="200" height="260" style=' + shapeString + '> </rect>'
      }
    }
  } 
  {
    return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
         ${shapeAttrib}
    
        <text x="145" y="135" font-size="30" text-anchor="middle" fill=${textColorEl}>${charEl}</text>
        </svg>
       `;
    }
}

module.exports = generateHTML;