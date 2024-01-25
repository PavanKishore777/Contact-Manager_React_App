import React from "react";
import "./Error.css";
import {Link} from "react-router-dom";

const ErrorMessage: React.FC = () => {
    return (
        <>


            <body className="bg-purple">

            <div className="stars">
                <div className="central-body">
                    <img className="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px" alt=""/>
                    <Link to={"/home"} className="btn-go-home">GO BACK HOME</Link>

                </div>
                <div className="objects">
                    <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" alt=""/>
                    <div className="earth-moon">
                        <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" alt=""/>
                        <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" alt=""/>
                    </div>
                    <div className="box_astronaut">
                        <img className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg"
                             width="140px" alt=""/>
                    </div>
                </div>
                <div className="glowing_stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>

                </div>

            </div>

            </body>

        </>

    )
}

export default ErrorMessage;