import React from 'react'
import HomePage from'../HomePage';
import {Route, Link} from "react-router-dom"


interface IProps {
    
}


const Header : React.FC<IProps>= (props: IProps) => {

    return(
        <div className="header-contenair">
            <div className="header-child">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>    
            </div>
           
        
        </div>
    )

}

export default Header