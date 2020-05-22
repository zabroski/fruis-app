import React from 'react';
import {Link} from "react-router-dom"




interface IProps {
    // home:string
}


const HomePage : React.FC<IProps>= (props: IProps) => {

    return(
        <div className="home-contenair">
            <div>
                <h1>Welcome</h1>
                RIGH HERE CAN YOU SEE ME???
            </div>
            Today
        
        </div>
    )

}

export default HomePage