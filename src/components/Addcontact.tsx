import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import Heading from "./Heading";
import "./styles/floating.css";
import {Link} from "react-router-dom";
import {IContact} from "../model/IContact";
import {IGroup} from "../model/IGroup";
import {Contactservice} from "../services/Contactservice";
import Loading from "../Loading/Loading";
import ErrorMessage from "../Error/ErrorMessage";
import errorMessage from "../Error/ErrorMessage";
import {useNavigate} from "react-router-dom";
import {Toastutil} from "../util/Toastutil";

interface IState {
    loading: boolean,
    groups: IGroup[],
    errormessage: string,
}

const Addcontact: React.FC = () => {

    const navigate = useNavigate();

    const [state, setState] = useState<IState>({
        loading: false,
        groups: [] as IGroup[],
        errormessage: ""
    })

    const [contact, setcontact] = useState<IContact>({
        name: "",
        company: "",
        email: "",
        title: "",
        mobile: "",
        imageurl: "",
        groupId: ""
    });


    useEffect(() => {
        setState({
            ...state,
            loading: true,
        })
        Contactservice.getallgroups().then((repsonse) => {
            setState({
                ...state,
                loading: false,
                groups: repsonse.data
            })
        }).catch((error) => {
            setState({
                ...state,
                loading: false,
                errormessage: error.message,
            })
        });
    }, []);

    const updateinput = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setcontact({
            ...contact,
            [event.target.name]: event.target.value
        })
    }

    const handlesubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(contact);
        Contactservice.createcontact(contact).then((response) => {
            if (response && response.data) {
                navigate("/home");
                Toastutil.displaysuccess("contact successfully created");

            }
        }).catch((error) => {
            console.log(error);
        });
    }


    const [mobile, setMobile] = useState("");

    const handleMobileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        // Use a regular expression to allow only numeric characters
        const numericValue = inputValue.replace(/[^0-9]/g, "");
        // Update the state with the cleaned numeric value
        setMobile(numericValue);
    };

    const {loading, errormessage, groups} = state;
    return (
        <>
            {loading && <Loading/>}

            <Heading Headingone="Add" Headingtwo="Contact" color="text-warning" colortwo="text-black"/>
            {!loading && errorMessage.length > 0 && <ErrorMessage/>}
            <section className="mt-3 addcontactaddclass">
                <div className="container">
                    <div className="row">
                        <div className="col">

                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
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
                                        groups.map((group, index) => {
                                            return (
                                                <option key={index} value={group.id}>{group.name}</option>
                                            )
                                        })
                                    }
                                </select>
                                <div className="mb-2 mt-3">
                                    <input type="submit" className="btn btn-success mx-1" value="Create"/>
                                    <Link to="/home" className="btn btn-danger float-end">
                                        Cancel
                                    </Link>


                                </div>

                            </form>
                        </div>
                        <div className="col-sm-3">
                            {
                                contact && contact.imageurl &&
                                <img
                                    className="img-fluid rounded-circle shadow-lg bg-white align-content-end imagefixes"
                                    src={contact.imageurl}
                                    alt=""/>
                            }
                        </div>
                    </div>
                </div>
            </section>

        </>
    )


}

export default Addcontact;