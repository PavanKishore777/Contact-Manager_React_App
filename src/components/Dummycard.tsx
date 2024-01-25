import React from "react";
import {Link} from "react-router-dom";
import imagecard from "../images/contactimage1.jpg";
import "./styles/floating.css";
import {IContact} from "../model/IContact";

interface IProps {
    contact: IContact;
    deletecontact: (contactId: string | undefined) => void;
}

const Dummycard: React.FC<IProps> = (props) => {
    const {contact, deletecontact} = props;


    return (
        <>
            <div className="card shadow">
                <div className="card-body macha">
                    <div className="row align-items-center flex-sm-row">
                        <div className="col-lg-4 imagefixes1 d-flex justify-content-center ">
                            <img className="img-fluid  imagefix2 " src={contact.imageurl} alt=""/>
                        </div>
                        <div className="col-lg-7 ">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Name : <span className="fw-bold">{contact.name}</span>
                                </li>
                                <li className="list-group-item">
                                    E-mail : <span className="fw-bold">{contact.email}</span>
                                </li>
                                <li className="list-group-item">
                                    Mobile.no : <span className="fw-bold">{contact.mobile}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-1 mt-1 mb-1 d-flex flex-row cd first-app justify-content-evenly flex-lg-column  align-items-center">
                            <Link to={`/contact/view/${contact.id}`}>
                                <div className="btn btn-warning fixlogicicon">
                                    <i className="bi bi-eye-fill"></i>
                                </div>
                            </Link>
                            <Link to={`/contact/edit/${contact.id}`}>
                                <div className="btn btn-primary mt-sm-2 fixlogicicon">
                                    <i className="bi bi-pencil-square"></i>
                                </div>
                            </Link>
                            <div className="btn btn-danger mt-sm-2 fixlogicicon" onClick={() => deletecontact(contact.id)}>
                                <i className="bi bi-trash"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dummycard;