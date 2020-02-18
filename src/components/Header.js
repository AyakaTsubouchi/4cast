import React from "react";
import Form from "../components/weather/Form";
import "./Header.css"

class Header extends React.Component{
    
        render() {
        
        return (
            <div className="header" >
            <div className="leftHeader">
                <div className="title">What To Wear</div>
                <div className="contents">
                <ul>
                    <li><a href="#"> Where To Go</a></li>
                    </ul>
        
                </div>
                </div>
                {/* <div className="rightHeader">
                    <Form loadWeather={this.getWeather}/>
                </div> */}

            
            </div>
        );
        }
   
}

export default Header;