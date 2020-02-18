import React from "react";
import Form from "../components/weather/Form";
import Weather from "../components/weather/Weather";
import unsplash from "../components/imageList/unsplash";
import ImageList from "../components/imageList/ImageList";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Header from "./Header";



class App extends React.Component{
    state = {
      weather: undefined,
        temperature: undefined,
        city: undefined,
        humidity: undefined,
        description: undefined,
        season: undefined,
        images: [],
        error: undefined
      }
       //getWeather is a method we'll use to make the api call
       getWeather = async (e) => {
            
        const city = e.target.elements.city.value;
      
        const Api_Key = "a9d26cdce59f235872922cf298bfdd24";
        e.preventDefault();   
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`);
        const response = await api_call.json();
        console.log(response);
        if(city){
          this.setState({
            weather: response.weather[0].main,
            temperature: response.main.temp,
            city: response.name,
            humidity: response.main.humidity,
            description: response.weather[0].description,
            error: ""
          })
          if(this.state.temperature > 293.15){
            this.setState({season : "summer"});
              }else if(this.state.temperature > 283.15){
                this.setState({season : "autumn"});
              }else{
                this.setState({season : "winter"});
              }
        }else{
          this.setState({
            error: "Please input search values..."
          })
        }

        const unspresponse = await unsplash.get("/search/photos", {
          params: {
            query: this.state.season+ " fashion"
          }
        });
    
        this.setState({ images: unspresponse.data.results });
    }
   

    render(){
        return (

            <div>
              <div className="wrapper">
                <div className="main">
                      <Header />
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-5 title-container">
                      </div>
                      <div className="col-xs-7 form-container">
                      <div className="container">
                      <Form loadWeather={this.getWeather} />
                      </div>
                      <Weather
                      weather={this.state.weather}
                          temperature={this.state.temperature}
                          city={this.state.city}
                          country={this.state.country}
                          humidity={this.state.humidity}
                          description={this.state.description}
                          error={this.state.error}
                        />
                        
                        <ImageList images={this.state.images} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
    }
}
export default App;