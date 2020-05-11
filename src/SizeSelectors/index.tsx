import React from 'react';



interface IProps {
  size:string,
  sizes:Array<number>,
  handleSizeChange:any
}

function onSizeChange(evt:any, handleSizeChange:Function) { 
  handleSizeChange(evt.target.value)
  console.log(evt)
}

const SizeSelectors: React.FC<IProps>= (props: IProps) => {

    // function sizeOptions() {
    //   return(
    //     <div>
    //       <select>
    //         <option>Volvo</option>
    //         <option>Saab</option>
    //         <option>Opel</option>
    //         <option >Audi</option>
    //     </select>
    //     </div>
    //   )
    //     // return props.sizes.map(function(num:any) {
    //     //   return (
    //     //     <option value={num} key={num}>
    //     //       {num}
    //     //     </option>
            
    //     //   )
    //     // });
    //   }




    return(
        <div>
          <label htmlFor="sise-Option">Size</label>
          {/* <select defaultValue={props.size}
           name="sizeOptions" 
           id="size-options"
           onChange={onSizeChange}
           > 
          </select> */}


          <select id="cars">
            {props.sizes.map((size) => {
              return (
                <option>{size}</option>
              )
            })}
          </select>
          {/* {sizeOptions()} */}
       
        </div>
    )
}


export default SizeSelectors