import React from 'react';
import logo from './images/pbalogo.png'

function Navbar(){
    return(
        <div style={{textAlign: 'center'}}>
            <img style={{paddingTop: '30px'}} src={logo} alt="Logo" />
        </div>
    );
}

export default Navbar