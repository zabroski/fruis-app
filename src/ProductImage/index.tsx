import React from "react"

interface IProps {
    color:string
}


const ProductImage: React.FC<IProps> = (props: IProps) => {
    const imgProps = {
        src: `../../../assets/${props.color}.jpg`
    }

    return(
        <div>
            {props.color}
             <img className="image" {...imgProps} alt="Product" />
        </div>
    )
}

export default ProductImage