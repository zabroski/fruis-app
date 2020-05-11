import React, { useState } from 'react';
import './App.css';
import ProductImage from './ProductImage';
import SizeSelectors from './SizeSelectors';
import ColorSelectors from './ColorSelectors';
import inventory from './data/data';

// var inventory = {
//   allSizes: (function(small, large) {
//     let sizes = [];
//     for (let i = small; i<= large; i++){
//       sizes.push(i);
//       sizes.push(i + 0.5)
//     }
//     return sizes;
//   })(7, 11),

//   allColors: ['red', 'blue', 'purple', 'brown'],

//   bySize : {
//     "7": [
//       "red", "blue"
//     ],

//     "7.5": [
//       "red", "blue"
//     ],

//     "8": [
//       "red", 'brown', 'green', 'purple', 'blue'
//     ],
//     "8.5": [
//       'red', 'blue'
//     ],
//     "9": [
//       'brown', 'green', 'purple'
//     ],
//     "9.5": [
//       'brown', 'green'
//     ],

//     "10": [
//       'red', 'green', 'blue', 'brown'
//     ],

//     "10.5": [
//       'red','green'
//     ]

//   },

//   byColor: {
//     "red" :['7','8', '8.5'],
//     "blue":[ '7', '7.5', '8', '8.5'],
//     "brown" :['8', '9', '9.5', '10'],
//     "purple": ['9', '9.5', '10.5'],
//     "green": [ '8', '9', '9.5', '10', '']
//   }

// };

interface IProps {
  color: string,
  size: string,
  sizes: string
  handleSizeChange: any,
  handleColorChange:any
}



const App = (props:any) => {

  const [ size , setSize ] = useState("8");
  const [ sizes, setSizes ] = useState(inventory.allSizes);

  const [ color, setColor ] = useState('red');
  const [ colors, setColors ] = useState(inventory.allColors)


  let handleSizeChange:any = (selectedSize:string) => {


    const sizes:any = inventory.bySize;
    if(sizes && sizes[selectedSize]){
      let availablrColors = sizes[selectedSize];
  
      setColor(availablrColors);
      setSize(selectedSize)
    }
  }

  
  let handleColorChange:any = (selectedColor:any) => {
    const colors:any = inventory.byColor;
    let availbleSizes = colors[selectedColor];

    setSizes(availbleSizes);
    setColors(availbleSizes);
  }
  
  return (
    <div className="App">
        <h1>Fruits App</h1>
        <div>
          <ProductImage color= {color}/>
        </div>

        <div>
          <SizeSelectors size={size} sizes={sizes} handleSizeChange ={handleSizeChange}/>
          {/* <ColorSelectors color={color} colors={colors}  handleColorChange={handleColorChange}  /> */}
        </div>
    </div>
  );
}

export default App;
