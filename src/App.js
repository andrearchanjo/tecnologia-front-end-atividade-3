import './App.css';
import './styles/atividade.css';
import React, { useState } from 'react';
import UsuarioEntrada from './components/UsuarioEntrada';
import UsuarioSaida from './components/UsuarioSaida';

function App() {
    // displayText: Criado uma variável para armazenar o valor atual do campo
    // setDisplayText: Função que atualiza o valor da variável
    const [displayText, setDisplayText] = useState('');

    const handleInputChange = (text) => {
        setDisplayText(text);
    };

    return (
        <div>
            <UsuarioEntrada id="name" label="Nome: " placeholder="Insira seu nome" onInputChange={handleInputChange}/>

            <UsuarioSaida p1={displayText} p2="Componente UsuarioSaida"/>

            <UsuarioSaida p1="Felipe" p2="Componente UsuarioSaida"/>
        </div>
    );
}

export default App;
