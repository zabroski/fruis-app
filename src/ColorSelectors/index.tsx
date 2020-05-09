import React from 'react';

interface IProps {
    color:string,
    handleColorChange:any
}



const ColorSelectors: React.FC<IProps>= (props: IProps) => {

    const {
        color
    } = props


    function ColorOption() {
        let allColors = ["red", "blue", "brown", "purple"]
        let colors = allColors
        return colors.map(function(num:any) {
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