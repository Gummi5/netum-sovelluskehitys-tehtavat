import React, { useState } from 'react'
import { IRowData } from './TableRow';

// Props of the add dialog
interface IDialogProps {
    onSubmit: (data: IRowData) => void
    useIcon?: boolean
    dialogHeader: string
  }

// Dialog for adding new rows to the table or updating them
const Dialog = (props: IDialogProps) => {
    const [popupOpen, setPopupOpen] = useState(false)
    const [addDisabled, setAddDisabled] = useState(true)
    const [input, setInput] = useState<IRowData>({firstName: "", lastName: "", age: 0})

    // Handles changes of input values
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
      const type = e.target.name
      const value = e.target.value
      
      // Sets new name value and checks if adding a new row is possible
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
      // Sets new age value and checks if adding a new row is possible
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
        {props.useIcon
          ?
          <button className="iconbutton" hidden={popupOpen} onClick={openAddDialog}><i className="fa fa-edit"></i></button>    
          :
          <button className="addbutton" hidden={popupOpen} onClick={openAddDialog}>Lisää</button>
        }
        {/* Dialog*/}
        <div className="dialogbg" style={{display: popupOpen ? 'block' : 'none' }}>
          <div className="dialog" style={{display: popupOpen ? 'block' : 'none' }}>
            <h4>{props.dialogHeader}</h4>
            <form method="dialog" onSubmit={() => {props.onSubmit(input); setPopupOpen(false)}}>
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
  
  export default Dialog