import React from 'react';

function hola(){
    alert("Que pasa mis chavalerias :D");
}

class Bob extends React.Component{
    name = {
        firstname: 'Javi',
        lastname: 'Oliveira'
    }

    render(){
        return (
            <div className="">
                <h1>Hola, {this.name.firstname + this.name.lastname}</h1>
                <button onClick={()=>{hola()}}> Clica aqui mi churra :3 </button>
            </div>
        );
    }
}

export default Bob;