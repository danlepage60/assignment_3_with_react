import React, { Component } from 'react';
import MenuItems from './MenuItems';



class MenuItem extends Component {
  render() {
    return  (
        <div style={itemStyle}>
            <p>{ this.props.item.Name }</p>
            <p style={{ float: 'right'}}>{ this.props.item.Price }</p>
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

export default MenuItem;
