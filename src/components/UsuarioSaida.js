import React, {Component} from "react";

class UsuarioSaida extends Component {
    constructor(props) {
        super(props);

        this.state = {
            p1: '',
            p2: '',
        }
    }

    render(props){
        return(
            <div className="usuario-saida">
                <p>{this.props.p1}</p>
                <p>{this.props.p2}</p>
            </div>
        );
    }
}

export default UsuarioSaida;