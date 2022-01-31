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
    <>
      <table>
        <thead>
          <tr>
            <th>Etunimi</th>
            <th>Sukunimi</th>
            <th>Ikä</th>
          </tr>
        </thead>
        <tbody>
        {/*testetet
            allData.map((e) => {
              return <TableRow firstName={e.firstName} lastName={e.lastName} age={e.age} onClick={() => deleteRow(2)} buttonText={"Poista"}></TableRow>
            })
          tetst*/}
          {/*allData.length <= 0
            ?
            // Empty table with text
            <tr>
                <td>Lisää henkilöitä listaan</td>
            </tr>
            :*/
            
            // Map table rows
            allData.map((row, index) => {
              return <TableRow key={index} firstName={row.firstName} lastName={row.lastName} age={row.age} onClick={() => deleteRow(index)} buttonText={"Poista"}></TableRow>
            })}
        </tbody>
      </table>
      <AddDialog onInput={addNew}></AddDialog>
    </>
    )
  }
  
  export default DataTable
