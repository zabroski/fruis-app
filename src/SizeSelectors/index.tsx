


import React from 'react';
interface IProps {
  size:string,
  sizes:Array<number>,
  handleSizeChange:any
}


function onSizeChange (evt:any, handleSizeChange:Function) { 

  handleSizeChange(evt.target.value)
  console.log(evt.target.value)
}


const SizeSelectors: React.FC<IProps>= (props: IProps) => {
    return(
        <div>
          <label htmlFor="sise-Option">Size</label>
          <select
            defaultValue={props.size}
            name="sizeOptions" 
            id="size-options"
            onChange={(evt:any) => {
              onSizeChange(evt, props.handleSizeChange);
            }}
          >

            {props.sizes.map((size) => {
              return (
                <option>{size}</option>
              )
            })}
          </select>
        </div>
    )
}


export default SizeSelectors