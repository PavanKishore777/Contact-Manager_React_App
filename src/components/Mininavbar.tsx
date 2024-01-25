import React from "react";
import {Link} from "react-router-dom";
import "./styles/floating.css"


interface IProps{
    makesearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    search: string;
}
const Mininavbar: React.FC <IProps>= (props) => {
    const{makesearch,search}=props;
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-6 col-md-5 mb-2">
                        <input
                            value={search}
                            onChange={e=>makesearch(e)}
                            type="search" placeholder="Search the Contact" className="form-control"/>
                    </div>
                    <div className="col-sm-6 flexing d-flex flex-sm-row flex-column ">
                        <div className="col-12 col-sm-3">
                            <button className="btn btn-success btn-block bg-warning text-dark hovering mt-1">Search <i
                                className="bi-search"></i></button>
                        </div>
                        <div className="col-12 col-sm-3 margining">
                            <Link to="/addcontact">
                                <button className="btn btn-success btn-block bg-dark hoveringadd mt-1">Add
                                    Contact <i
                                        className="bi-plus-circle-fill"></i></button>
                            </Link>


                        </div>
                    </div>

                </div>
            </div>

        </>
    )

}

export default Mininavbar;