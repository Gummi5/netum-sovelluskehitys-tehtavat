import React from 'react'
import './App.css'
import DataTable from './DataTable/DataTable';
import Footer from './Footer';
import Header from './Header';


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
