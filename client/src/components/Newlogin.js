import React,{useState} from 'react'
import './Login.css'
import Navbar from './Navbar';
import Dashboard from './Dashboard';

export default function Newlogin() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');

    const [signupName,setSignupName] = useState('')
    const [signupEmail,setSignupEmail] = useState('')
    const [signupPhone,setSignupPhone] = useState('')
    const [signupPassword,setSignupPassword] = useState('')
    const [signupRePassword,setSignupRePassword] = useState('')

    const handleOnEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleOnPasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const onSignUpNameChange = (event) => {
        setSignupName(event.target.value)
    }

    const onSubmitFormCheck = async() =>{
        try {
            const response = await fetch(`http://localhost:5000/users/${email}`);
            var jsonData = await response.json();
            var data = JSON.parse(JSON.stringify(jsonData));
            var fetchEmail = data[0]['email'];
            var fetchPassword = data[0]['password'];
            console.log(jsonData);
            console.log(data);
            if(email === "" || password === ""){
                alert("Please Enter Your Details")
            }

            else if(fetchEmail === email && fetchPassword === password){
                alert("valid credentials");
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
            const body = {signupName , signupEmail , signupPhone,signupPassword, signupRePassword}
            console.log(body);
            return(<Dashboard/>);

        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div>
        <Navbar/>
        <div className="row">
            <div className="col-md-6 mx-auto p-0">
                <div className="card">
                    <div className="login-box">
                        <div className="login-snip"> 
                            <input id="tab-1" type="radio" name="tab" className="sign-in" />
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
                                    <div className="group"> <label for="pass" className="label">Email Address</label> <input id="pass" type="text" className="input" placeholder="Enter your email address"/> </div>
                                    <div className="group"> <label for="pass" className="label">Phone Number</label> <input id="pass" type="text" className="input" placeholder="Enter your phone number"/> </div>
                                    <div className="group"> <label for="pass" className="label">Password</label> <input id="pass" type="password" className="input" data-type="password" placeholder="Create your password"/> </div>
                                    <div className="group"> <label for="pass" className="label">Repeat Password</label> <input id="pass" type="password" className="input" data-type="password" placeholder="Repeat your password"/> </div>
                                    <div className="group"> <input type="submit" className="button" value="Sign Up" to="/dashboard"  onClick={onSubmitSignUpForm}/> </div>
                                    <div className="group"> <button to="/dashboard">CLick Me</button> </div>
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
