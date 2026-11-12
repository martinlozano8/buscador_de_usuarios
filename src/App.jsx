import { useState } from 'react'
import './App.css';
import Header from './Header';

function App() {
  const [query, setQuery] = useState("");
  return (
      <div className="App">
       <Header/>
       <h2 id="buscador">Buscador de usuarios</h2>
       <input type="text" id="query" value={query} onChange={e=>setQuery(e.target.value)} placeholder="texto a buscar"/>
       <button id="botonsearch">Buscar</button>
      </div>
      
  );
}

export default App;
