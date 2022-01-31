import React, { useState } from 'react'
import { IRowData } from './TableRow';

// Props of the add dialog
export interface IAddProps {
    onInput: (arg: IRowData) => void
  }

const AddDialog = (props: IAddProps) => {
    const [popupOpen, setPopupOpen] = useState(false)
    const [addDisabled, setAddDisabled] = useState(true)
    const [input, setInput] = useState<IRowData>({firstName: "", lastName: "", age: 0})

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
      const type = e.target.name
      const value = e.target.value

      if(type !== "age"){
        setInput(original => ({
          ...original,
            [type]: value
          }))
        
        if(!Number.isNaN(input.age)){
          if(value === "" || input.age < 1 || input.age > 124) {
            setAddDisabled(true)
          }
          else {
            setAddDisabled(false)
          }
        }
        else {
          setAddDisabled(true)
        }
      }
      else {
        const numeralValue = parseInt(value)

        if(Number.isNaN(numeralValue)) {
          setInput(original => ({
            ...original,
              "age": NaN
          }))

          setAddDisabled(true)
        }
        else {

          setInput(original => ({
            ...original,
              "age": numeralValue
          }))

          if(numeralValue < 1 || numeralValue > 124 || numeralValue === NaN || input.firstName === "" || input.lastName === "") {
            setAddDisabled(true)
          }
          else {
            setAddDisabled(false)
          }
        }
      }
    }

    const openAddDialog = () => {
      setPopupOpen(true)
      setAddDisabled(true);
      setInput({firstName: "", lastName: "", age: 0})
    }

    return (
      <>
        {/* Button opens dialog*/}
        <button className="addbutton" onClick={openAddDialog}>Lisää</button>
        {/* Dialog*/}
        <div className="dialogbg" style={{display: popupOpen ? 'block' : 'none' }}>
          <div className="dialog" style={{display: popupOpen ? 'block' : 'none' }}>
            <form method="dialog" onSubmit={() => {props.onInput(input); setPopupOpen(false)}}>
              <label className="formheader">
                Etunimi
              </label>
              <input className="forminput" onChange={(e) => handleChange(e)}
                  value={input.firstName}
                  placeholder="Esim. Matti"
                  name="firstName"
                  type="textfield"
                />
              <label className="formheader">
                Sukunimi
              </label>
              <input className="forminput" onChange={(e) => handleChange(e)}
                  value={input.lastName}
                  placeholder="Esim. Meikäläinen"
                  name="lastName"
                  type="textfield" 
                />
              <label className="formheader">
                Ikä
              </label>
              <input className="forminput" onChange={(e) => handleChange(e)}
                  value={input.age}
                  name="age"
                  type="number"
                  min="1" 
                  max="124"
                />
              <div className="formbuttons">
                <input className="acceptbutton" type="submit" value="Hyväksy" disabled={addDisabled}></input>
                <input className="cancelbutton" type="button" value="Peruuta" onClick={() => setPopupOpen(false)}></input>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
  
  export default AddDialog