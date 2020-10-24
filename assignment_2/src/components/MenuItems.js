import React, { Component } from 'react';
import MenuItem from './MenuItem';


class MenuItems extends Component {
  render() {
    return this.props.MenuItems.map((item) => (
       <MenuItem key={item.Id} item={item} />
    ));            
  }
}



export default MenuItems;
