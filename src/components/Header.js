import React from "react";
import Form from "../components/weather/Form";
import "./Header.css"

class Header extends React.Component{
    
        render() {
        
        return (
            <div className="header" >
            <div className="leftHeader">
                <div className="title">4cast</div>
                <div className="contents">
                <ul>
                    <li><a href="#"> whatoWear</a></li>
                    <li><a href="#"> whatoWear</a></li>
                    </ul>
        
                </div>
                </div>

            
            </div>
        );
        }
   
}

export default Header;