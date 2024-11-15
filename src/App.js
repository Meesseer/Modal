import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [phoneError, setPhoneError] = useState(false)

  const handleClick = () => {
    setOpenModal(true)
  }
  const handleClose = (e) =>{
    e.preventDefault()
    setOpenModal(false)
  }

  const handlePhone = (e) => {
    const value = e.target.value
    setPhone(value)
  }

  const handleDate = (e) => {
    const date = e.target.value
    setDate(date)
  }

  const handleSubmit =(e) =>{
    e.preventDefault()
    if(phone.length !== 10){
      setPhoneError(true)
      alert('Invalid phone number. Please enter a 10-digit phone number.')
    }

    const today = new Date();
    const enteredDate = new Date(date)
    if( enteredDate > today){
      alert('Invalid date of birth. Date of birth cannot be in the future.')
    }else{
      if(!phoneError){
        alert("Form submitted Successfully")
        setOpenModal(false)
      }
    }

    
  }
  return (
    <div className='App'>
     <h1>User Details Modal</h1>
     <button style={{backgroundColor: "blue", color: "white", borderRadius: "1rem", width:"10em", height:"4em"}} onClick={handleClick}>Open Form</button>
     {openModal && (
          <div className="modal" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClose}>
              &times;
            </button>
            <form onSubmit={handleSubmit}>

              <div>
                <label htmlFor="username">UserName</label>
                <input 
                id="Username" 
                type="text" 
                placeholder="Username"
                required
                />
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" placeholder="Email Address"
                required
              /> 
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  onChange={handlePhone}
                  style={{borderColor: phoneError ? 'red' : 'initial'}}
                  required
                  />
              </div>
              <div>
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" onChange={handleDate}/>
              </div>
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
     )}
    </div>
  );
}

export default App;
