import React, { Component } from 'react'

export class AddReso extends Component {
    state = {
        Name: '',
        Date:''

    }

    onChange = (e) => this.setState({ [e.target.name]:e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addReso(this.state.Name, this.state.Date)
        this.setState({Name:'', Date:''})
    }


    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex'}}>    

                <h5 style={ newResoStyle }>New Reservation</h5>

                <input 
                    type="text" 
                    name="Name" 
                    style={{ flex: '2', padding: '5px'}}
                    placeholder="Enter full name"
                    value={this.state.Name}
                    onChange={this.onChange}
                /> 
                <input
                    type="date"
                    name="Date"
                    style={{ flex: '1', padding: '5px'}}
                    value={this.state.Date}
                    onChange={this.onChange}
                    
                />

                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                />

            </form>


        )
    }
}

export default AddReso

const newResoStyle = {
    flex: '1',
    backgroundColor: '#f4f4f4',
    padding: '5px',
    border: '#aaa solid',
    fontWeight: 'bold'
}