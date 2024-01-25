import React from "react";
import {Link} from "react-router-dom";
import "./styles/floating.css";

const Landing: React.FC = () => {
    return (
        <>

            <section className="landing-page" id="landing-page">
                <div className="wrapper">
                    <div className="flex-content">
                        <h1 className="vacation text-white text-warning-outline">WELCOME TO THE CONTACT MANAGER</h1>
                        <div className="btn btn-warning mystyle">
                            <span>
                               <Link to="/home" className="text-white text-decoration-none">
                                  <span className="text-dark mystyle">Manage Contacts</span>
                               </Link>
                             </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Landing;