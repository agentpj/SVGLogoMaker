const ShapeCircle = ({charEl, textColorEl, shapeColorEl}) => {
  
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="120" r="80" fill=${shapeColorEl}> </circle>
      <text x="145" y="135" font-size="30" text-anchor="middle" fill=${textColorEl}>${charEl}</text>
     </svg>`
  };


const ShapeSquare = ({charEl, textColorEl, shapeColorEl}) => { 
  
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="40" width="200" height="260" fill=${shapeColorEl}> </rect>
      <text x="145" y="135" font-size="30" text-anchor="middle" fill=${textColorEl}>${charEl}</text>
     </svg>`
  };

const ShapeTriangle = ({charEl, textColorEl, shapeColorEl}) => {
  
   return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="150,10 200,182 60,182" fill=${shapeColorEl}> </polygon>
          <text x="145" y="135" font-size="30" text-anchor="middle" fill=${textColorEl}>${charEl}</text>
         </svg>`
  };

module.exports = (ShapeCircle, ShapeSquare, ShapeTriangle);