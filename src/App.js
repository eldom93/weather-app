import React from 'react';
import Search from './components/search.js';
import Weather from './components/weather.js';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
const API_KEY = "ab72597bec0e5cde1813ccfe26f5fec7";

class App extends React.Component {
  state ={
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    if(city && country){
      this.setState({
      temperature: data.main.temp,
      city:data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    });
  }else{
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Please enter in a city and country"
    });

  }
  }
  render(){
  return (
    <div className="App container">
<h1 className="is-family-primary is-family-monospace is-size-1 header has-text-weight-bold islarge">Weather App</h1>
   <Search getWeather={this.getWeather} />
   <Weather  
   temperature={this.state.temperature}
   city={this.state.city}
   country={this.state.country}
   humidity={this.state.humidity}
   description={this.state.description} 
   error={this.state.error}/>
    </div>
  );
  }
}

export default App;
