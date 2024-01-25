import React from "react";
import Aboutuscards from "../Aboutuscards";
import Navbar from "../Navbar";

const Aboutus: React.FC = () => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h5 className="display-3 text-warning text-decoration-underline text-center">About Our
                            Application</h5>
                    </div>
                </div>
                <Aboutuscards color="text-danger" heading="Data & Privacy"/>
                <Aboutuscards color="text-primary" heading="Hide your Favourites"/>
                <Aboutuscards color="text-secondary" heading="Safe Cloud Storage"/>
                <Aboutuscards color="text-black bg-warning text-center" heading="Conclusion"/>

            </div>
        </>
    )
}

export default Aboutus;