import React from 'react';
import './Registration.css';
import {useState, useRef} from 'react';
import {Button} from './Button.js';
import {auth} from '../firebase.js'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { clear } from '@testing-library/user-event/dist/clear';

function Registration() {

    const [registerMode, setRegisterMode] = useState('');
    const [registerError, setRegisterError] = useState(null);
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [matchPasswords, setMatchPasswords] = useState(false);
    const stateRef = useRef();
    stateRef.current = registerError;

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

    const multiFunc = () => {
        handleSubmit();
        clearInput();
    }

    const clearInput = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    const validatePassword = () => {

        if (password === confirmPassword) {

            console.log('Password Matches');
            console.log(password + '----' + confirmPassword)
            setMatchPasswords(true);
            stateRef.current = false;
        }  else {
            // setMatchPasswords(false);
            console.log('doesnt match.... ' + matchPasswords);
            // setRegisterError(true);
            stateRef.current = true;
            setRegisterMode('Password does not match.');
            
        }
    }

    const handleSubmit  = () => {
        setRegisterMode('');
        validatePassword();
        console.log('ConfirmPassword is ' + matchPasswords);
        if (stateRef.current === false) {
            console.log('confirmpassword is true');
            createUserWithEmailAndPassword(auth, email, password).then( () => {
                // setRegisterSuccess(true);
                setRegisterMode('Register successful!');
                stateRef.current = false;
            }) .catch(function(error) {
                stateRef.current = true;
                // Handle Errors here.
                setRegisterError(true);
                setRegisterMode('Email already exists');
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/email-already-in-use') {
                    console.log('auth/email-already-in-use.');
                } else {
                    console.log(errorMessage);
                }
                // console.log(error);
                });
                
        } 
        console.log('state ref = ' + stateRef.current)
            // setRegisterSuccess(true);
            // setRegisterMode('Register successful!');

    } 

  return (
    <div> 
        <h3 className='title'>Register</h3>
        <div className='registration-container'>
            <div className="form-body">
                <div className={stateRef.current ? 'registerError' : 'registerSuccess' }>{registerMode}</div>
                
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
                    {/* <Link to='/'> */}
                        <Button onClick={()=> multiFunc()} type="submit" className = "btn btn--primary btn--medium">Register</Button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Registration