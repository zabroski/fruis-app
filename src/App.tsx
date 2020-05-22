import React, { useState, useEffect} from 'react';
import './App.css';
import ProductImage from './ProductImage';
import SizeSelectors from './SizeSelectors';
import ColorSelectors from './ColorSelectors';
import Header from './Header';
import HomePage from './HomePage';
import AboutMe from './AboutMe'
import inventory from './data/data';
import {Route, Link} from "react-router-dom"


interface IProps {
  color: string,
  size: string,
  sizes: string,
  home:string,
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
      {/* <main className="header-container"> */}
         <Header />
         <Route path='/home' render= {(props) => {
             return <HomePage/>
          }}
        />

          <Route path='/about' render= {(props) => {
             return <AboutMe />
            }}
        />  
      {/* </main> */}
     
       
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
