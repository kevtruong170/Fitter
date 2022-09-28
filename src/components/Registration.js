import React from 'react'
import './Registration.css'
import {useState} from 'react'
    
function Registration() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,password,confirmPassword);
    }

  return (
    <div> 
        <h3 className='title'>Register</h3>
        <div className='registration-container'>
            <div className="form-body">
                <div className="firstName">
                    <label className='form-label' for="firstName"> First Name: </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastName">
                    <label className='form-label' for="lastName"> Last Name: </label>
                    <input className="form__input" type="text" value={lastName} onChange = {(e) => handleInputChange(e)} id="lastName" placeholder="Last Name"/>
                </div>
                <div className="password">
                    <label className='form-label' for="password"> Create Password: </label>
                    <input className="form__input" type="text" value={password} onChange = {(e) => handleInputChange(e)} id="password" placeholder="New Password"/>
                </div>
                <div className="confirmPassword">
                    <label className='form-label' for="confirmPassword"> Confirm Password: </label>
                    <input className="form__input" type="text" value={confirmPassword} onChange = {(e) => handleInputChange(e)} id="confirmPassword" placeholder="Confirm Password"/>
                </div>
                <div className="email">
                    <label className='form-label' for="email"> Email: </label>
                    <input className="form__input" type="text" value={email} onChange = {(e) => handleInputChange(e)} id="email" placeholder="Email"/>
                </div>
                <div className="buttonSubmit">
                    <button onClick={()=>handleSubmit()} type="submit">Register</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Registration