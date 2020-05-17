import React, { useState, useEffect} from 'react';
import './App.css';
import ProductImage from './ProductImage';
import SizeSelectors from './SizeSelectors';
import ColorSelectors from './ColorSelectors';
import inventory from './data/data';

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
  const [ colors, setColors ] = useState(inventory.allColors);

  const handleSizeChange:any = (selectedSize:string) => {
      const sizes:any = inventory.bySize;
      if(sizes && sizes[selectedSize]){
        let availablrColors = sizes[selectedSize];
        setColors(availablrColors);
        setSize(selectedSize)
      }
  }

  
  const handleColorChange:any = (selectedColor:any) => {
    // const colors:any = inventory.byColor;
    // if(colors && colors[selectedColor]){

    //   let availbleSizes = colors[selectedColor];
    //   setSizes(availbleSizes);
      setColor(selectedColor);
    // }
    
    

  }
  
  return (
    <div className="App">
        <h1>Fruits App</h1>
        <div>
          <ProductImage color={color}/>
        </div>

        <div>
          <SizeSelectors size={size} sizes={sizes} handleSizeChange ={handleSizeChange}/>
          <ColorSelectors color={color} colors={colors}  handleColorChange={handleColorChange}  />
        </div>
        <div>
          
        </div>
    </div>
  );
}

export default App;
