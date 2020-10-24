import React, { Component } from 'react';
import Reservations from './Reservations';



class Reservation extends Component {
  render() {
    const {Id} = this.props.reso;
    return  (
        <div style={itemStyle}>
           <button onClick={this.props.cancelReso.bind(this, Id)} style={btnStyle}>Cancel Reservation</button>
            <p>{ this.props.reso.Name }</p>
            <p>{ this.props.reso.Date }</p>
           
           
        </div>
    )     
          
  }
}



const itemStyle = {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderBottom: '1px #ccc solid',
    fontWeight: 'bold'
}

export default Reservation;

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'full',
  padding: '5px 10px',
  cursor: 'pointer',
  float: 'right'
}