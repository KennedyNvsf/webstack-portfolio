import React from "react";
import "../navbar/_navbar.style.scss";
// import Brightness3RoundedIcon from '@material-ui/icons/Brightness3';

const NavBar = () => {

    return (

        <nav className="navBar">

            <div className="logo">
                <span className="logo_span">Web</span>Stack
            </div>

            <ul className="navLinks">

                <li><a href="#Home" className="nav_active">Home</a></li>
                <li><a href="#abt">About us</a></li>
                <li><a href="#ser">Services</a></li>
                <li><a href="#test">Testemonials</a></li>
                <li><a href="#sub">Subscribe</a></li>

            </ul>

            <div className="nav_rightSide">
                <button className="navBtn">Hire Us</button>

                {/* TODO: ADD THE THEME SWITCH ICONS AND FUNCTIONALITY */}
                {/* <div className="theme_mode">
                   <Brightness3RoundedIcon/>
                </div> */}
            </div>
            

        </nav>
    )
}

export default NavBar;