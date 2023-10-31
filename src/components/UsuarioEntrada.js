import React, {Component} from "react";

class UsuarioEntrada extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 'name',
            value: '',
            placeholder: 'Insira seu nome:'
        }
    }

    render(){
        return(
            <div>
                <label for={this.state.id}>Nome:</label>
                <input id={this.state.id} type="text" value={this.state.value} placeholder={this.state.placeholder}/>
            </div>
        );
    }
}

export default UsuarioEntrada;