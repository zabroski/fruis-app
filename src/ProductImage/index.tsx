import React from "react"

interface IProps {
    color:string
}


const ProductImage: React.FC<IProps> = (props: IProps) => {

    const {
        color
    } = props

    const imgProps = {
        // src:{`../../assets/red.jpg ${props.color}`}

        src: "../../assets/red.jpg"
    }
    const allStart = <img className="image" {...imgProps} alt="shoes" />

    return(
        <div>
             {allStart}
        </div>
    )
}

export default ProductImage