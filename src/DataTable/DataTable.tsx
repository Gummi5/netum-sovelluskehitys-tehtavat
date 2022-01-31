import React, { useState } from 'react'
import AddDialog from './AddDialog'
import TableRow, { IRowData } from './TableRow'

function DataTable() {
  const [allData, setAllData] = useState<IRowData[]>([])

  const deleteRow = (id : number) : void => {
    let data = allData.filter((row, index) => index !== id)
    setAllData(data)
  }

  const addNew = (newData : IRowData) => {
      const rowData = allData
      console.log(newData)
      console.log(allData)
      rowData.push(newData)
      setAllData([...rowData])
      console.log(allData[0])
  }

  /*const randomizeID = () : number =>{
    const base = allData.length*1000
    return base + Math.floor(Math.random() * 999)
  }*/

  return (
    <div className="contentbody">
      <div className="datatable">
      <table>
        <thead>
          <tr>
            <th id="darkcell">Etunimi</th>
            <th id="darkcell">Sukunimi</th>
            <th id="darkcell">Ikä</th>
            <th id="darkcell">Muokkaa/poista</th>
          </tr>
        </thead>
        <tbody>
          {allData.length < 1 
            ?
            <tr>
              <th id="emptycell"></th>
              <th id="emptycell"></th>
              <th id="emptycell"></th>
              <th id="emptycell"></th>
            </tr>
            :
            allData.map((row, index) => {
              return <TableRow key={index} firstName={row.firstName} lastName={row.lastName} age={row.age} onClick={() => deleteRow(index)} buttonText={"Poista"}></TableRow>
            })}
        </tbody>
      </table>
      </div>
      
      <AddDialog onInput={addNew}></AddDialog>
    </div>
    )
  }
  
  export default DataTable
