import React, { Component } from 'react';
import Reservations from '../reservations/Reservations';
import {v4 as uuid} from 'uuid';
import Reservation from '../reservations/Reservation';
import AddReso from '../AddReso';

 class ReservationsPage extends Component {
    state = {
        Reservations: [
          {
            Id: 1,
            Name: 'Bob Loblaw',
            Date: '01-01-2020',

          },
      
          {
            Id: 2,
            Name: 'Sally Smith',
            Date: '02-01-2020',
          },
          
          {
            Id: 3,
            Name: 'Ben Jenkins',
            Date: '01-02-2020',
          }
        ]
      }
      
      //cancel reservation
      cancelReso = (Id) => {
        this.setState({ Reservations: [...this.state.Reservations.filter
          (Reservation => Reservation.Id !== Id)] });
      }

      //add reservation
      addReso = (Name, Date) => {
        const newReservation = {
          id: uuid,
          Name: Name,
          Date: Date
        }
        this.setState({ Reservations: [...this.state.Reservations, newReservation]})
      }
      
      
        render() {
          return (
            
               
                <React.Fragment>
                  <h1 style={ResoStyle}>Reservations</h1>
                  <AddReso addReso={this.addReso} />
                    <Reservations Reservations={this.state.Reservations} 
                      cancelReso={this.cancelReso} />
                </React.Fragment>
             
          );
        }
 }



export default ReservationsPage;

const ResoStyle = {
  background: '#ff0000',
  color: '#fff',
  padding: '10px'
}