import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import validator from 'validator';
import Navbar from './Navbar'
import './Login.css'

export default function Newlogin() {

    const history = useHistory();

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');

    const [signupName,setSignupName] = useState('')
    const [signupEmail,setSignupEmail] = useState('')
    const [signupPhone,setSignupPhone] = useState('')
    const [signupPassword,setSignupPassword] = useState('')
    const [signupRePassword,setSignupRePassword] = useState('')
    const [signupDOB, setSignUpDob] = useState(new Date())

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    var emailValue = false;
    var passwordValue = false;

    const handleOnEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleOnPasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const onSignUpNameChange = (event) => {
        setSignupName(event.target.value)
    }

    const onSignUpEmailChange = (event) => {
        var checkEmail = event.target.value;
        if(validator.isEmail(checkEmail)) {
            setEmailError('Valid Email :)')
            emailValue = true;
        }
        else{
            setEmailError('Enter valid Email!')
        }
        setSignupEmail(event.target.value)
    }

    const onSignUpPhoneChange = (event) => {
        setSignupPhone(event.target.value)
    }

    const onSignUpPasswordsChange = (event) => {
        var checkPassword = event.target.value
        if(validator.isStrongPassword(checkPassword,{
            minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
        })){
            setPasswordError('Is Strong Password')
            passwordValue = true;
        }
        else{
            setPasswordError('Is Not Strong Password')
        }

        setSignupPassword(event.target.value)
    }

    const onSignUpRePasswordsChange = (event) => {
        setSignupRePassword(event.target.value)
    }

    const onSignUpDobChange = (event) => {
        setSignUpDob(event.target.value)
    }

    const onSubmitFormCheck = async() =>{
        try {
            const response = await fetch(`http://localhost:5000/users/${email}`);
            var jsonData = await response.json();
            var data = JSON.parse(JSON.stringify(jsonData));
            var fetchEmail = data[0]['email'];
            var fetchPassword = data[0]['password'];
            var fetchName = data[0]['name'];
            var fetchDOB = data[0]['dob'];
            var fetchPhone = data[0]['phone'];
            console.log(jsonData);
            console.log(data);
            if(email === "" || password === ""){
                alert("Please Enter Your Details")
            }

            else if(fetchEmail === email && fetchPassword === password){
                history.push({
                    pathname:'/maindashboard',
                    state: {fetchName,fetchEmail,fetchDOB,fetchPhone}
                })
            }
            else{
                alert("Invalid credentials");
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    const onSubmitSignUpForm = async() => {
        try {
            const name = signupName;
            const email = signupEmail;
            const dob = signupDOB;
            const phone = signupPhone;
            const password = signupPassword;
            const body = {name,email,dob,phone,password}
            console.log(body)
            if(signupPassword === signupRePassword){
                const response = await fetch("http://localhost:5000/users",{
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    body:JSON.stringify(body)
                });
                history.push({
                    pathname:'/maindashboard',
                    state: {name,email,dob,phone}
                })
            }
            else{
                alert('Please enter valid values, and try again!')
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div>
            <Navbar></Navbar>
        <div className="row">
            <div className="col-md-6 mx-auto p-0">
                <div className="card">
                    <div className="login-box">
                        <div className="login-snip"> 
                            <input id="tab-1" type="radio" name="tab" className="sign-in"/>
                            <label for="tab-1" className="tab">Login</label> <input id="tab-2" type="radio" name="tab" className="sign-up"/>
                            <label for="tab-2" className="tab">Sign Up</label>
                            <div className="login-space">
                                <div className="login">
                                    <div className="group"> <label for="user" className="label">Email</label> <input id="user" type="text" className="input" placeholder="Enter your email address" onChange={handleOnEmailChange}/> </div>
                                    <div className="group"> <label for="pass" className="label">Password</label> <input id="pass" type="password" className="input" data-type="password" placeholder="Enter your password" onChange={handleOnPasswordChange}/> </div>
                                    <div className="group"> <input type="submit" className="button" value="Sign In" onClick={onSubmitFormCheck}/> </div>
                                    <div className="hr"></div>
                                    <div className="foot"> <a to="/forgorpassword">Forgot Password?</a> </div>
                                </div>
                                <div className="sign-up-form">
                                    <div className="group"> <label for="user" className="label">Name</label> <input id="user" type="text" className="input" placeholder="Enter Your Name" onChange={onSignUpNameChange}/> </div>
                                    <div className="group"> <label for="pass" className="label">Email Address</label> <input id="pass" type="text" className="input" placeholder="Enter your email address" onChange={onSignUpEmailChange}/> <label for="pass" className="label">{emailError}</label></div>
                                    <div className="group"> <label for="pass" className="label">Phone Number</label> <input id="pass" type="text" className="input" placeholder="Enter your phone number" onChange={onSignUpPhoneChange}/> </div>
                                    <div className="group"> <label for="pass" className="label">Date Of Birth</label> <input id="pass" type="date" className="input" placeholder="Enter your date of birth" onChange={onSignUpDobChange} style={{color:'white'}} defaultValue={Date.now()}/> </div>
                                    <div className="group"> <label for="pass" className="label">Password</label> <input id="pass" type="password" className="input" data-type="password" placeholder="Create your password" onChange={onSignUpPasswordsChange}/> <label for="pass" className="label">{passwordError}</label> </div>
                                    <div className="group"> <label for="pass" className="label">Repeat Password</label> <input id="pass" type="password" className="input" data-type="password" placeholder="Repeat your password" onChange={onSignUpRePasswordsChange}/> </div>
                                    <div className="group"> <input type="submit" className="button" value="Sign Up" onClick={onSubmitSignUpForm}/> </div>
                                    <div className="hr"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
