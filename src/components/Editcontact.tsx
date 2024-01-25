import React, {useEffect, useState} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import Navbar from "./Navbar";
import Heading from "./Heading";
import images from "../images/Contact images.jpg"
import "./styles/floating.css"
import {IContact} from "../model/IContact";
import {IGroup} from "../model/IGroup";
import {Contactservice} from "../services/Contactservice";
import Loading from "../Loading/Loading";
import errorMessage from "../Error/ErrorMessage";
import {Toastutil} from "../util/Toastutil";


interface IState {
    loading: boolean;
    contact: IContact;
    ErrorMessage: string;

}

const Editcontact: React.FC = () => {

    const [groups, setGroups] = useState<IGroup[]>([] as IGroup[])
    const {contactId} = useParams();

    const [state, setState] = useState<IState>({
        loading: false,
        contact: {
            name: "",
            company: "",
            email: "",
            title: "",
            mobile: "",
            imageurl: "",
            groupId: ""
        } as IContact,
        ErrorMessage: "",

    });

    useEffect(() => {
        getallgroupsfromserver();
    }, []);

    useEffect(() => {
        if (contactId) {
            getcontactsfromserver(contactId);

        }
    }, [contactId]);

    const getallgroupsfromserver = () => {
        Contactservice.getallgroups().then((groupresponse) => {
            const groups = groupresponse.data;
            setGroups(groups);
        }).catch((error) => {
            console.log(error)

        });
    }


    const getcontactsfromserver = (contactId: string) => {
        setState({...state, loading: true});
        Contactservice.getcontact(contactId).then((contactresponse) => {
            const contact = contactresponse.data;
            setState({
                ...state,
                loading: false,
                contact: contact,
            })

        }).catch((error) => {
            console.log(error);
            setState({
                ...state,
                loading: false,
                ErrorMessage: error.message
            });
        });
    }

    const handlesubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(contact);
        if (contactId) {
            Contactservice.updatecontact(contact, contactId).then((response) => {
                if (response && response.data) {
                    navigate("/home");
                    Toastutil.displatinfotoast("contact Updated successfully");
                }
            }).catch((error) => {
                console.log(error);
            });
        }

    }


    const [mobile, setMobile] = useState("");

    const handleMobileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;


        // Use a regular expression to allow only numeric characters
        const numericValue = inputValue.replace(/[^0-9]/g, "");

        // Update the state with the cleaned numeric value
        setMobile(numericValue);
    };

    const updateinput = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setState({
            ...state,
            contact: {
                ...state.contact,
                [event.target.name]: event.target.value
            }

        });
    }


    const {loading, contact, ErrorMessage} = state;
    const navigate = useNavigate();
    return (
        <>
            {loading && <Loading/>}

            <Heading Headingone="Edit " Headingtwo="Contact" color="text-warning" colortwo="text-black"/>
            {!loading && errorMessage.length > 0 && <ErrorMessage/>}
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">

                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-3">
                            {
                                contact && contact.imageurl &&
                                <img src={contact.imageurl} alt="" className={`img-fluid rounded-circle shadow-lg bg-white imagefixes`}/>
                            }
                        </div>
                        <div className="col-sm-4">
                            <form className="add-contact-form" onSubmit={e => handlesubmit(e)}>
                                <div className="mb-2">
                                    <input
                                        name={`name`}
                                        value={contact.name}
                                        onChange={e => updateinput(e)}
                                        required={true} type="text" id="name-input" placeholder="Enter Name"
                                        className="form-control"/>
                                </div>
                                <div className="mb-2">
                                    <input
                                        name={`imageurl`}
                                        value={contact.imageurl}
                                        onChange={e => updateinput(e)}
                                        required={true} type="text" id="image-input" placeholder="imageurl"
                                        className="form-control"/>
                                </div>
                                <div className="mb-2">
                                    <input
                                        name={`mobile`}
                                        value={contact.mobile}
                                        onChange={(e) => {
                                            updateinput(e);
                                            handleMobileChange(e);
                                        }}
                                        required={true}
                                        type="text"
                                        id="mobile-input"
                                        placeholder="Mobile"
                                        className="form-control"
                                        inputMode="numeric"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        name={`email`}
                                        value={contact.email}
                                        onChange={e => updateinput(e)}
                                        required={true} type="email" id="email-input" placeholder="Email"
                                        className="form-control"/>
                                </div>
                                <div className="mb-2">
                                    <input
                                        name={`company`}
                                        value={contact.company}
                                        onChange={e => updateinput(e)}
                                        required={true} type="text" id="company-input" placeholder="Company Name"
                                        className="form-control"/>
                                </div>
                                <div className="mb-2">
                                    <input
                                        name={`title`}
                                        value={contact.title}
                                        onChange={e => updateinput(e)}
                                        required={true} type="text" id="title-input" placeholder="Title"
                                        className="form-control"/>
                                </div>
                                <select
                                    name={`groupId`}
                                    value={contact.groupId}
                                    onChange={e => updateinput(e)}
                                    required={true} className="form-control" id="group-select-input"
                                    placeholder="select categoery">
                                    <option value=""> select categoery</option>
                                    {
                                        groups.length > 0 &&
                                        groups.map((group, index) => {
                                            return (
                                                <option key={index} value={group.id}>{group.name}</option>
                                            )
                                        })
                                    }
                                </select>
                                <div className="mb-2 mt-3">
                                    <input type="submit" className="btn btn-primary mx-1" value="Update"/>
                                    <Link to="/home" className="btn btn-danger float-end">
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )

}

export default Editcontact;