import { useContext } from "react";
import { AuthContext } from "../context/auth.context"
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownLink,
    MDBCollapse,
    MDBInputGroup
  } from 'mdb-react-ui-kit';
import { NavLink } from "react-router-dom";

function Navbar(){

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext); 
    


    return (
        <nav className="Navbar">

            <NavLink to="/">Home</NavLink> | 
            <NavLink to="/tasks">TaskList</NavLink> | 

            {isLoggedIn && (
                <>
                    <span> Welcome back {user && user.username}</span> 
                    &nbsp;
                    <button onClick={logOutUser}>Logout</button>
                </>
            )}

            {!isLoggedIn && (
                <>
                    <NavLink to="/signup">Sign Up</NavLink> | 
                    <NavLink to="/login">Login</NavLink>
                </>
            )}


        </nav>
    );
}


export default Navbar;