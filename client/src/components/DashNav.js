import "./styles/dashnav.css"
import { useState } from "react";

export default function DashNav() {

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

    return (
        <div className="body">
            <div className="sidebar">
                <div className="logo-details">
                    <i className='bx bxl-c-plus-plus icon'></i>
                    <div className="logo_name">DASHBOARD</div>
                    <i className='bx bx-menu' id="btn" onClick={stateChange}>⏩</i>
                </div>
                <ul className="nav-list">
                    <li>
                        <a href="">
                            <i className='bx bx-user' ></i>
                            <span className="links_name">Doctor Profiles</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className='bx bx-book-reader' ></i>
                            <span className="links_name">Charges</span>
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
