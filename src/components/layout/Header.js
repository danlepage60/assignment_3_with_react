import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Chez Dan's Restaurant</h1>
            <Link style={linkStyle} to="/">Menu</Link> | <Link style={linkStyle} to="/reservationsPage">Reservations</Link>
        </header>
    )
}

const headerStyle = {
    background: '#ff0000',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    padding: '10px'
}

export default Header;