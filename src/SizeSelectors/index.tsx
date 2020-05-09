import React from 'react';



interface IProps {
  size:string,
  handleSizeChange:any
}

const SizeSelectors: React.FC<IProps>= (props: IProps) => {
  const {
    size,

  } = props
    function sizeOptions() {
    
        var allSizes = ['8', '9', '', '12', '21']
        var sizes = allSizes;
  
        return sizes.map(function(num:any) {
          return (
            <option value={num} key={num}>
              {num}
            </option>
          )
        });
      }


      function onSizeChange(evt:any) { 
        props.handleSizeChange(evt.target.value)
        console.log(evt)
      }

    return(
        <div>
          <label htmlFor="sise-Option">Size</label>
          <select defaultValue={props.size}
           name="sizeOptions" 
           id="size-options"
           onChange={onSizeChange}
           > 
          </select>
          {sizeOptions}
       
        </div>
    )
}


export default SizeSelectors