import React from "react";
import "./Input.css";

const Inputform: React.FC = () => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-control">
                            <input type="text" required/>
                            <label>
                                <span style={{transitionDelay: "0ms"}}>U</span>
                                <span style={{transitionDelay: "50ms"}}>s</span>
                                <span style={{transitionDelay: "100ms"}}>e</span>
                                <span style={{transitionDelay: "150ms"}}>r</span>
                                <span style={{transitionDelay: "200ms"}}>n</span>
                                <span style={{transitionDelay: "250ms"}}>a</span>
                                <span style={{transitionDelay: "300ms"}}>m</span>
                                <span style={{transitionDelay: "350ms"}}>e</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Inputform;