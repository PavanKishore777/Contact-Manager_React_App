import React from "react";
import {Link} from "react-router-dom";
import "./styles/floating.css"

interface IProps {
    headingone: string;
    headingtwo: string;
    color: string;
}

const Navbar: React.FC<IProps> = (props) => {

    return (
        <>
            <nav className={`navbar navbar-dark bg-dark ${props.color} navbar-expand-md `}>
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <i className="bi bi-phone display-6"></i>
                        <span className="text-warning texty display-6">{props.headingone}</span>
                        <span className="texty display-6">{props.headingtwo}</span>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto floating">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/error" className="nav-link">
                                    Admin
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/loading" className="nav-link">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/aboutus" className="nav-link">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;