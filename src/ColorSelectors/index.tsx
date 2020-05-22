
import React, {useState} from 'react';

interface IProps {
    color:string,
    colors:Array<any>,
    handleColorChange:Function
}


const onColorChange = (evt:any,  handleColorChange:Function) => {
    handleColorChange(evt.target.value);
    
}



const ColorSelectors: React.FC<IProps>= (props: IProps) => {

    return(
        <div>
            <label htmlFor="color-Option">Color</label>
            <select
                defaultValue={props.color} 
                name="colorOptions"
                id="color-options"
                onChange={(evt:any) =>{
                    onColorChange(evt, props.handleColorChange)
                }}  
            >

                {props.colors.map((color) => {
                    return(
                    <option>{color}</option>
                    )
                })}
         
            </select>
        </div>
    )
}


export default ColorSelectors;