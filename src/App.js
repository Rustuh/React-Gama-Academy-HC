import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App(props) {
  const [ usuario, setUsuario ] = useState('Rustuh')
  return (
    <>  
      <p>{ usuario }</p>
      <input name="usuario" id="usuario" className="usuarioImput" placeholder="Usúario" />
      <button type="button">Pesquisar</button>
    </>
  );
}

export default App;

