import './App.css';
import './styles/atividade.css';
import UsuarioEntrada from './components/UsuarioEntrada';
import UsuarioSaida from './components/UsuarioSaida';

function App() {
    return (
      <div>
        <UsuarioEntrada/>

        <UsuarioSaida p1="Felipe" p2="Componente UsuárioSaída"/>
      </div>
    );
}

export default App;
