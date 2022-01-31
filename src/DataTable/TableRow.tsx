import React from 'react'

// Basic one row data
export interface IRowData {
  firstName: string
  lastName: string
  age: number
}
// Additional props of one row (local interface)
interface IRowElementData extends IRowData{
  buttonText: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}
// JSX Element displaying data of a row
const TableRow = (row: IRowElementData) => {
    return (
      <>
          <tr>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.age}</td>
          </tr>
          <button onClick={row.onClick}>{row.buttonText}</button>
      </>
    )
}

export default TableRow
