import React, { useState } from 'react'
import Dialog from './Dialog'
import TableRow, { IRowData } from './TableRow'
// Contains table for data and add dialog
function DataTable() {
  const [allData, setAllData] = useState<IRowData[]>([])
  const [sorted, setSorted] = useState([false, false, false])

  // Deletes a row by id
  const deleteRow = (id : number) : void => {
    let data = allData.filter((row, index) => index !== id)
    setAllData(data)
  }
  // Adds a new row of given data
  const addNew = (newData : IRowData) => {
    const rowData = allData
    rowData.push(newData)
    setAllData([...rowData])
  }

  // Replaces an existing row with given data
    const updateRow = (newData : IRowData, id: number) => {
      addNew(newData)
      deleteRow(id)
  }

  // Sorts people by column headers
  const sortTable = (columnHeader : string) => {
    const newData = allData

    if(columnHeader === "firstName") {
      if(sorted[0] !== true) {
        newData.sort((person1, person2) => {
          if (person1.firstName.toUpperCase() < person2.firstName.toUpperCase()) return -1
          if (person1.firstName.toUpperCase() > person2.firstName.toUpperCase()) return 1
          return 0
        })
        setSorted([true, false, false])
      }
      else {
        newData.sort((person1, person2) => {
          if (person1.firstName.toUpperCase() > person2.firstName.toUpperCase()) return -1
          if (person1.firstName.toUpperCase() < person2.firstName.toUpperCase()) return 1
          return 0
        })
        setSorted([false, false, false])
      }
    }
    else if(columnHeader === "lastName") {
      if(sorted[1] !== true) {
        newData.sort((person1, person2) => {
          if (person1.lastName.toUpperCase() < person2.lastName.toUpperCase()) return -1
          if (person1.lastName.toUpperCase() > person2.lastName.toUpperCase()) return 1
          return 0
        })
        setSorted([false, true, false])
      }
      else {
        newData.sort((person1, person2) => {
          if (person1.lastName.toUpperCase() > person2.lastName.toUpperCase()) return -1
          if (person1.lastName.toUpperCase() < person2.lastName.toUpperCase()) return 1
          return 0
        })
        setSorted([false, false, false])
      }
    }
    else if(columnHeader === "age") {
      if(sorted[2] !== true) {
        newData.sort((person1, person2) => {
          if (person1.age < person2.age) return -1
          if (person1.age > person2.age) return 1
          return 0
        })
        setSorted([false, false, true])
      }
      else {
        newData.sort((person1, person2) => {
          if (person1.age > person2.age) return -1
          if (person1.age < person2.age) return 1
          return 0
        })
        setSorted([false, false, false])
      }
    }
    setAllData([...newData])
  }

  return (
    <div className="contentbody">
      <div className="datatable">
      <table>
        <thead>
          <tr>
            <th onClick={() => sortTable("firstName")} id="darkcell">Etunimi</th>
            <th onClick={() => sortTable("lastName")} id="darkcell">Sukunimi</th>
            <th onClick={() => sortTable("age")} id="darkcell">Ikä</th>
            <th>Muokkaa/poista</th>
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
              return <TableRow key={index} id={index} firstName={row.firstName} onEdit={updateRow} lastName={row.lastName} age={row.age} onClick={() => deleteRow(index)}></TableRow>
            })}
        </tbody>
      </table>
      </div>
      {/*Add dialog, uses function addNew as a prop*/}
      <Dialog onSubmit={addNew} dialogHeader="Lisää henkilö"></Dialog>
    </div>
    )
  }
  
  export default DataTable
