import React, { Component } from 'react';
class Contador extends Component {

    maisUm = () => {
        //this.props.numero++;
        console.log(this)
    }
    
    render() { 
        return (  
            <div>
                <div>Número: {this.props.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button>Dec</button>
            </div>
        )
    }
}

export default Contador;









// Solução 1 do problema do this fazendo o bind da função com o objeto atual
// constructor(props) {
//     super(props)
//     this.maisUm = this.maisUm.bind(this);
// }

// Solução 02
// <button onClick={() => this.maisUm()}>Inc</button> 