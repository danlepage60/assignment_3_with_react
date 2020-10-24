import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MenuItems from './components/MenuItems';
import Header from './components/layout/Header';
import ReservationsPage from './components/pages/ReservationsPage';
import {v4 as uuid} from 'uuid';

import './App.css';


class App extends Component {
state = {
  MenuItems: [
    {
      Id: uuid,
      Name: 'Spaghetti',
      Price: 14.99
    },

    {
      Id: uuid,
      Name: 'Burger',
      Price: 18.99
    },
    
    {
      Id: uuid,
      Name: 'Steak Salad',
      Price: 22.99
    }
  ]
}



  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
           
            <Route exact path="/" render={props => (
              <React.Fragment>
                 <h1 style= {MenuStyle}>Menu</h1>
                <MenuItems MenuItems={this.state.MenuItems} />  
              </React.Fragment>
            )}/>   
            <Route path="/reservationsPage" component={ReservationsPage} />         
          </div>
        </div>
      </Router>
    );
  }
}

export default App;


const MenuStyle = {
  background: '#ff0000',
  color: '#fff',
  padding: '10px'
}