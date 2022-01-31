import React, { useState } from 'react'
import { IRowData } from './TableRow';

// Props of the add dialog
export interface IAddProps {
    onInput: (arg: IRowData) => void
  }

const AddDialog = (props: IAddProps) => {
    const [popupOpen, setPopupOpen] = useState(false)
    const [addDisabled, setAddDisabled] = useState(true)
    const [input, setInput] = useState<IRowData>({firstName: "", lastName: "", age: -1})

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
      const type = e.target.name
      const value = e.target.value

      if(type !== "age"){
        setInput(original => ({
          ...original,
            [type]: value
          }))
      }
      else {
        setInput(original => ({
          ...original,
            "age": parseInt(value)
        }))
      }

      if(input.firstName === "" || input.lastName === "" || input.age < 1){
        setAddDisabled(true);
      }
      else {
        setAddDisabled(false);
      }
    }

    const openAddDialog = () => {
      setPopupOpen(true)
      setInput({firstName: "", lastName: "", age: -1})
    }

    return (
      <>
        {/* Button opens dialog*/}
        <button onClick={openAddDialog}>Lisää</button>
        {/* Dialog*/}
        <dialog open={popupOpen}>
          <form method="dialog" onSubmit={() => {props.onInput(input); setPopupOpen(false)}}>
            <label>
              Etunimi:
              <input onChange={(e) => handleChange(e)}
                name="firstName"
                type="textfield"
              />
            </label>
            <br />
            <label>
              Sukunimi:
              <input onChange={(e) => handleChange(e)}
                name="lastName"
                type="textfield" 
              />
            </label>
            <br />
            <label>
              Ikä:
              <input onChange={(e) => handleChange(e)}
                name="age"
                type="number"
                min="1" 
                max="124"
              />
            </label>
            <input type="submit" value="Hyväksy" disabled={addDisabled}></input>
            <input type="button" value="Peruuta" onClick={() => setPopupOpen(false)}></input>
          </form>
        </dialog>
      </>
    )
  }
  
  export default AddDialog