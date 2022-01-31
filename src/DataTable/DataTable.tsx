import React, { useState } from 'react'
import AddDialog from './AddDialog'
import TableRow, { IRowData } from './TableRow'
// Contains table for data and add dialog
function DataTable() {
  const [allData, setAllData] = useState<IRowData[]>([])
  // Deletes a row by id
  const deleteRow = (id : number) : void => {
    let data = allData.filter((row, index) => index !== id)
    setAllData(data)
  }
  // Adds a new row of given data
  const addNew = (newData : IRowData) => {
      const rowData = allData
      console.log(newData)
      console.log(allData)
      rowData.push(newData)
      setAllData([...rowData])
      console.log(allData[0])
  }

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
          {// Show empty placeholder cells, if no data inserted
            allData.length < 1 
            ?
            <tr>
              <th id="emptycell"></th>
              <th id="emptycell"></th>
              <th id="emptycell"></th>
              <th id="emptycell"></th>
            </tr>
            :
            // Map table rows
            allData.map((row, index) => {
              return <TableRow key={index} firstName={row.firstName} lastName={row.lastName} age={row.age} onClick={() => deleteRow(index)}></TableRow>
            })}
        </tbody>
      </table>
      </div>
      {/*Add dialog, uses function addNew as a prop*/}
      <AddDialog onInput={addNew}></AddDialog>
    </div>
    )
  }
  
  export default DataTable
