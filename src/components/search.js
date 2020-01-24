import React from 'react';
import { Button } from "react-bulma-components";

class Search extends React.Component {
    render(){
  return (
    <form className="columns is-desktop" onSubmit={this.props.getWeather}>

        <input className="column is-3 input" type="text" name="city" placeholder="City" />

        <input className="column is-3 input" type="text" name="country" placeholder="Country" />
    
        <Button color="success">Search</Button>
    </form>
  );
    }
}

export default Search;