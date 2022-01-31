import React from 'react'
import './App.css'
import DataTable from './DataTable/DataTable';
import Footer from './Footer';
import Header from './Header';

/*
  Person data listing app by
  Juho Kumara, 2022
  githublink tähän
*/

// MAIN APP
function App() {

  return (
    <div className="App">
      <Header/>
      <DataTable/>
      <Footer/>
    </div>
  )
}

export default App
