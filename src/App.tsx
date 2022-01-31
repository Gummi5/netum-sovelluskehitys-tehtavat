import React from 'react'
import './App.css'
import DataTable from './DataTable/DataTable';


function App() {

  return (
    <div className="App" >
      <header>
        NIMILISTASOVELLUS
      </header>
      <DataTable/>
      <footer>
        <p>Juho Kumara</p>
        <p>2022</p>
        <a href="https://github.com/Gummi5">Github</a>
      </footer>
    </div>
  );
}

export default App
