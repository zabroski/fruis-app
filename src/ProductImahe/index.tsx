import React from "react"


const ProductImage: React.FC = (props) => {

    const imgProps = {
        src: "../../assets/red.jpg"
    }
    const allStart = <img {...imgProps} alt="shoes" />

    return(
        <div>
             {allStart}
        </div>
    )
}

export default ProductImage