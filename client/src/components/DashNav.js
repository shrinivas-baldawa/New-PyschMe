import "./styles/dashnav.css"
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function DashNav(props) {

    const history = useHistory();

    var [display, setDisplay] = useState(true);

    function menuBtnChange() {

        let sidebar = document.querySelector(".sidebar");

        if (display == false) {
            sidebar.classList.toggle("open");
        }
        else {
            sidebar.classList.toggle("close");
        }
    }

    function stateChange() {
        setDisplay(!display);
        menuBtnChange();
    }

    function PaymentAndDoctorDetials() {
        const name = props.name
        const email = props.email
        history.push({
            pathname:'/paymentanddoctordetails',
            state: {name, email}
        })
    }

    return (
        <div className="body">
            <div className="sidebar">
                <div className="logo-details">
                    <i className='bx bxl-c-plus-plus icon'></i>
                    <div className="logo_name">
                        <h3>DASHBOARD</h3>
                        </div>
                    <i className='bx bx-menu' id="btn" onClick={stateChange}>⏩</i>
                </div>
                <ul className="nav-list">
                    <li>
                        <a href="">
                            <i className='bx bx-user' ></i>
                            <span className="links_name">Doctor Profiles</span>
                        </a>
                        <a onClick={PaymentAndDoctorDetials}>
                            <i className='bx bx-user' ></i>
                            <span className="links_name">Payment & Doctor Details</span>
                        </a>
                    </li>
                    <li className="menu">
                        <a href="">
                            <i className='bx bx-chast' ></i>
                            <span className="links_name">To Do List</span>
                        </a>
                        <a href="/">
                            <i className='bx bx-chast' ></i>
                            <span className="links_name">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
