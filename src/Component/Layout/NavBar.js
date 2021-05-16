import React from 'react';
import { Link , NavLink } from "react-router-dom";
function Navbar() {

    


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <div className="container-fluid">
                    <Link className="navbar-brand" style={{color:'rgba(227, 229, 239, 1)+'}} to="/">User</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto"> 
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" exact to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" exact to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link className="btn btn-outline" style={{backgroundColor:'white', }} to="/adduser" >Add User</Link>
                </div>
            </div>
        </nav>
    );

};

export default Navbar;