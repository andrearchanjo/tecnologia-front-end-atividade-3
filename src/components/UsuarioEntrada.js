import React, {Component} from "react";

class UsuarioEntrada extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 'name',
            value: '',
            label: '',
            placeholder: 'Insira seu nome:'
        }
    }

    handleInputChange = (e) => {
        const novoValor = e.target.value;
        this.setState({ value: novoValor });
        this.props.onInputChange(novoValor);
    };

    render(props){
        return(
            <div>
                <label for={this.props.id}>{this.props.label}</label>
                <input id={this.props.id} type="text" value={this.props.value} placeholder={this.props.placeholder} onChange={this.handleInputChange}/>
            </div>
        );
    }
}

export default UsuarioEntrada;