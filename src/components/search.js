import React from 'react';



class Search extends React.Component {
    render(){
  return (
    <form onSubmit={this.props.getWeather}>

        <input type="text" name="city" placeholder="City" />

        <input type="text" name="country" placeholder="Country" />
        <button height="100px" width="325px">Search</button>
    </form>
  );
    }
}

export default Search;