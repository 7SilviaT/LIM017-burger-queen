import React from 'react';
import app from '../Firebase/config-FB';

class Menu extends React.Component{

    logout(){
        
    }
    render(){
    return(
        <div>
        <h1>pagina de Menu</h1>
        <button onClick={this.logout}>Log out</button>
        </div>
    )
}
}

export default Menu