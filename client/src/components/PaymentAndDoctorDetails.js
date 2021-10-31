import React from 'react'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashNav from './DashNav';
import './styles/paymentanddoctor.css';

export default function PaymentAndDoctorDetails() {

    const [user, setUser] = useState([]);

    const location = useLocation();
    
    const fetchUser = async() => {
        try {
            const email = location.state.email;
            const response = await fetch(`http://localhost:5000/users/payments/${email}`);
            var jsonData = await response.json();
            return {success: true, data:jsonData};
        } catch (err) {
            console.log(err.message)
            return {success: false}
        }
    }

    function showCalender() {
        
    }

    useEffect(() => {
        console.log(location.state.name);
        console.log(location.state.email);
        (async () => {
            let res = await fetchUser();
            if(res.success){
                setUser(res.data[0]);
            }
        })();
    }, [location]);

    return (
        <div>
            <DashNav/>
            <div className="payanddoc-container">
                <h2 style={{fontSize:'40px',marginBottom:'30px',textAlign:'left'}}>Your Assigned Doctor</h2>
                <h4 style={{fontSize:'22.5px',color: '#3A93A2',textAlign: 'left',marginBottom:'15px'}}>Doctor Name: {user.doctor_name}</h4>
                <h4 style={{fontSize:'22.5px',color: '#3A93A2',textAlign: 'left',marginBottom:'15px'}}>Doctor Email: {user.doctor_email}</h4>
                <h4 style={{fontSize:'22.5px',color: '#3A93A2',textAlign: 'left',marginBottom:'15px'}}>Doctor Phone: {user.doctor_phone}</h4>
            </div>
        </div>
    )
}
