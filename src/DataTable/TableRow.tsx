import React from 'react'

// Basic one row data
export interface IRowData {
  firstName: string
  lastName: string
  age: number
}
// Additional props of one row (local interface)
interface IRowElementData extends IRowData {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}
// JSX Element displaying data of a row
const TableRow = (row: IRowElementData) => {
    return (
      <>
          <tr>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.age}</td>
              <td id="iconcell">
                <button className="iconbutton" onClick={row.onClick}><i className="fa fa-edit"></i></button>
                <button className="iconbutton" onClick={row.onClick}><i className="fa fa-trash"></i></button>
              </td>
          </tr>
      </>
    )
}

export default TableRow
