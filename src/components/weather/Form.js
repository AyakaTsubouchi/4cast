import React from "react";
import { StyleSheet, css } from 'aphrodite';
const styles = StyleSheet.create({
    name: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        lineHeight: '20px',
        textAlign: 'center',
        letterSpacing: 0.2,
    //     '@media (max-width: 768px)': {
    //         display: 'none'
    // }
}});
    
    
    class Form extends React.Component{
    render(){
        return(
            <form className={css(styles.name)} onSubmit = {this.props.loadWeather} >
                <select name="city" placeholder="City ...">
                <option  value="Vancouver">Vancouver</option>
                <option  value="Sydney">Sydney</option>
                <option  value="Kawagoe">Kawagoe</option>
                <option  value="Kokubu">Kokubu</option>
                <option  value="Yokohama">Yokohama</option>
                </select>
        
                <button>Get Weather</button>
            </form>
        )
    }
}

export default Form;