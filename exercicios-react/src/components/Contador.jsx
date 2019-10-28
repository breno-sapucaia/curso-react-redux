import React, { Component } from 'react';
class Contador extends Component {
    state = {
        numero: 0
    }
    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
    }
    menosUm = () => {
        this.setState({ numero: this.state.numero - 1})
    }
    
    render() { 
        return (  
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
            </div>
        )
    }
}

export default Contador;









// Solução 1 do problema do this fazendo o bind da função com o objeto atual
// constructor(state) {
//     super(props)
//     this.maisUm = this.maisUm.bind(this);
// }

// Solução 02
// <button onClick={() => this.maisUm()}>Inc</button> 

// Solução 03
// maisUm = () => {
//     //this.props.numero++;
//     console.log(this)
// }