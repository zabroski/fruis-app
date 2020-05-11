import React from 'react';

interface IProps {
    color:string,
    colors:Array<any>,
    handleColorChange:Function
}



const ColorSelectors: React.FC<IProps>= (props: IProps) => {

    function ColorOption() {
        return props.colors.map(function(num:any) {
            return (
                <option value={num} key={num}>
                    {num}
                </option>

            )
        })

    }


    function onColorChange(e:any) {
        props.handleColorChange(e.target.value);

    }

    return(
        <div>
            <label htmlFor="color-Option"></label>
            <select defaultValue={props.color}
            name="colorOptions"
            id="color-options"
            onChange={onColorChange}
            >    
            </select>
            {ColorOption}
        </div>
    )
}


export default ColorSelectors;