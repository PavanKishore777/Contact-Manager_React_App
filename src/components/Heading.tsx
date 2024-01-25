import React from "react";


interface IProps {
    Headingone: string,
    Headingtwo: string,
    color: string,
    colortwo: string,

}

const Heading: React.FC<IProps> = (props) => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className={`display-5 ${props.color} text-decoration-underline text-center`}>{props.Headingone}
                            <span
                                className={`${props.colortwo} text-decoration-underline`}> {props.Headingtwo}</span>
                        </h1>
                    </div>
                    <div className="col-12">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, vita Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit. At culpa cum dignissimos eos facilis in maxime mollitia
                        nesciunt odit? Eos!
                    </div>

                </div>
            </div>
        </>
    )
}

export default Heading;