import React, { Component } from 'react';
import Reservation from './Reservation';


class Reservations extends Component {
  render() {
    return this.props.Reservations.map((reso) => (
       <Reservation key={reso.Id} reso={reso}
       cancelReso={this.props.cancelReso} />
    ));            
  }
}


export default Reservations;
