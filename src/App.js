import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { ModalTemplate } from './components/ModalTemplate';
import { useState } from 'react';

function App() {

  const [livro, setLivro] = useState({nome: 'O Mundo de Sophia', autor: 'Jostein Gaarder' })

  return (
    <div className="App">
      <ModalTemplate data={livro} />
    </div>
  );
}

export default App;
