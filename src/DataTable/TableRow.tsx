import React from 'react'
import Dialog from './Dialog'

// Basic one row data
export interface IRowData {
  firstName: string
  lastName: string
  age: number
}
// Additional props of one row (local interface)
interface IRowElementData extends IRowData {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  onEdit: (data: IRowData, id: number) => void
  id: number
}
// JSX Element displaying data of a row
const TableRow = (row: IRowElementData) => {

    const EditRow = (data: IRowData) => {
      row.onEdit(data, row.id)
    }

    return (
      <>
          <tr>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.age}</td>
              <td id="iconcell">
                <Dialog onSubmit={EditRow} useIcon={true} dialogHeader="Muokkaa"></Dialog>
                <button className="iconbutton" onClick={row.onClick}><i className="fa fa-trash"></i></button>
              </td>
          </tr>
      </>
    )
}

export default TableRow
