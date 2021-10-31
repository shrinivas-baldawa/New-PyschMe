import React from 'react'
import CheckIcon from '@material-ui/icons/Check';
import './HomeComp1.css'

export default function HomeComp1() {
    return (
        <div>
            <div className="homecomp-heading">
                <h5 style={{color:'#5BBBCB'}}>We Can Guide You In The Right Direction</h5>
                <h1>Schedule Your Assessment With Us Today!</h1>
            </div>
            <div className="flex-container">
                <div className="left-item">
                    <CheckIcon style={{ fontSize: 80 }}/>
                    <h3 style={{background:'#e9ecef'}}>We Always Provide Personal Attention To Everyone</h3>
                </div>
                <div className="center-item">
                    <CheckIcon style={{ fontSize: 100 }}/>
                    <h3 style={{color:'#ffffff',background:'#3A93A2'}}>No Referrals Required For New Patients!</h3>
                </div>
                <div className="right-item">
                    <CheckIcon style={{ fontSize: 80 }}/>
                    <h3 style={{background:'#e9ecef'}}>Urgent Requests Seen Within 24 Hours!</h3>
                </div>
            </div>
        </div>
    )
}
