import React, { Component } from 'react';



class Weather extends Component {
  
    render(){
  return (
      <div className="is-family-monospace is-size-3 has-text-success has-text-left header has-text-weight-medium ismedium">
        {this.props.city && this.props.country && 
        <p>
            <span  className="has-text-grey-dark ">Location:</span> {this.props.city}, {this.props.country }</p>}
    {this.props.temperature && <p> 
        <span className="has-text-grey-dark ">Temperature:</span> {this.props.temperature }</p> }
        {this.props.humidity && <p>
            <span className="has-text-grey-dark ">Humidity: </span>{this.props.humidity }</p>  }
        {this.props.description && <p>
            <span className="has-text-grey-dark ">Description:</span> {this.props.description}</p>  } 
        {this.props.error && <p> <span className="has-text-grey-dark ">{this.props.error}</span></p>}
      </div>
  );
    }
}

export default Weather;