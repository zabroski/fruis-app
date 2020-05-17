
import React, {useState} from 'react';

interface IProps {
    color:string,
    colors:Array<any>,
    handleColorChange:Function
}






function onColorChange(evt:any, handleColorChange:Function) {
    handleColorChange(evt.target.value);

}




// const onColorChange = (evt:any) => {
//     handleColorChange(evt.target.value);
    
// }



const ColorSelectors: React.FC<IProps>= (props: IProps) => {

    const [ color, setColor ] = useState('purple');
    return(
        <div>
            <label htmlFor="color-Option">Color</label>
            <select
                defaultValue={color} 
                name="colorOptions"
                id="color-options"
                onChange={(evt:any) =>{
                    onColorChange(evt, props.handleColorChange)
                    // setColor(evt.target.value)
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