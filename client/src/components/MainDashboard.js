import React from 'react'
import Card from './Card';
import List from './List';
import Checkbox from './Checkbox';
import User from './User';
import DashNav from './DashNav';
import '../App.css'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function MainDashboard() {

    const location = useLocation();

    useEffect(() => {
        console.log(location.state.fetchName);
        console.log(location.state.fetchEmail);
        console.log(location.state.fetchPhone);
        console.log(location.state.fetchDOB);
     }, [location]);

    return (
        <div className="App">
            <User name={location.state.fetchName || location.state.name} phone={location.state.fetchPhone || location.state.phone} email={location.state.fetchEmail || location.state.email} dob={location.state.fetchDOB || location.state.dob}/>
            <Card/>
            <div className="Container">
                <List name={location.state.fetchName || location.state.name} email={location.state.fetchEmail || location.state.email} phone={location.state.fetchPhone || location.state.phone} user_email={location.state.fetchEmail || location.state.email}/>
                <Checkbox/>
            </div>
            <DashNav name={location.state.fetchName || location.state.name} email={location.state.fetchEmail || location.state.email} />
        </div>
    )
}
