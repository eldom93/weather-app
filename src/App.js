import React from 'react';
import Search from './components/search.js';
import Weather from './components/weather.js';
import './App.css';
const API_KEY = "ab72597bec0e5cde1813ccfe26f5fec7";

class App extends React.Component {
  state ={
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city:data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description
    });
  }
  render(){
  return (
    <div className="App">
<h1>Weather App</h1>
   <Search getWeather={this.getWeather} />
   <Weather  
   temperature={this.state.temperature}
   city={this.state.city}
   country={this.state.country}
   humidity={this.state.humidity}
   description={this.state.description} />
    </div>
  );
  }
}

export default App;
