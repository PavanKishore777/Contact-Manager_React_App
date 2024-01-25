import React, {useEffect, useState} from "react";

import Heading from "./Heading";
import Mininavbar from "./Mininavbar";
import Dummycard from "./Dummycard";
import "./styles/Home.css";
import {IContact} from "../model/IContact";
import {Contactservice} from "../services/Contactservice";
import Loading from "../Loading/Loading";

import {Toastutil} from "../util/Toastutil";

interface IState {
    loading: boolean;
    contacts: IContact[];
    ErrorMessage: string;
    filteredcontacts: IContact[];
}

const Home: React.FC = () => {
    const [search, setSearch] = useState<string>("");

    const [state, setState] = useState<IState>({
        loading: false,
        contacts: [] as IContact[],
        ErrorMessage: "",
        filteredcontacts: [] as IContact[],
    });

    useEffect(() => {
        getallcontactsfromserver()
    }, []);

    const makesearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        if (event.target.value.trim() != "") {
            setState({
                ...state,
                filteredcontacts: contacts.filter(contact => contact.name.toLowerCase().trim().includes(event.target.value.toLowerCase().trim()))
            })
        } else {
            setState({
                ...state,
                filteredcontacts: contacts
            })
        }
    }

    const getallcontactsfromserver = () => {
        setState({...state, loading: true,});
        Contactservice.getallcontacts().then((response) => {
            setState({...state, loading: false, contacts: response.data, filteredcontacts: response.data})

        }).catch((error) => {
            setState({...state, loading: false, ErrorMessage: error.message})
        })
    }

    const {loading, contacts, ErrorMessage, filteredcontacts} = state;
    const deletecontact = (contactId: string | undefined) => {
        if (contactId) {
            Contactservice.deletecontact(contactId).then((response) => {
                if (response.data) {
                    getallcontactsfromserver();
                    Toastutil.displayerror("Contact deleted")

                }
            }).catch((err) => {
                setState({
                    ...state,
                    loading: false,
                    ErrorMessage: "errorMessage",
                })
            });
        }

    }
    return (
        <>
            {loading && <Loading/>}

            <div className="mt-2">
            <Heading Headingone="Manage " Headingtwo="Contacts" color="text-warning" colortwo="text-black" />
            </div>
            {!loading && ErrorMessage.length > 0 && <ErrorMessage/>}
            {/*<div className="container mt-4">*/}
            {/*    <div className="row">*/}
            {/*        <div className="col-sm-6 col-md-5 mb-2">*/}
            {/*            <input*/}
            {/*                value={search}*/}
            {/*                onChange={e=>makesearch(e)}*/}
            {/*                type="search" placeholder="Search the Contact" className="form-control"/>*/}
            {/*        </div>*/}
            {/*        <div className="col-sm-6 flexing d-flex flex-sm-row flex-column ">*/}
            {/*            <div className="col-12 col-sm-3">*/}
            {/*                <button className="btn btn-success btn-block bg-warning text-dark hovering">Search <i*/}
            {/*                    className="bi-search"></i></button>*/}
            {/*            </div>*/}
            {/*            <div className="col-12 col-sm-3 margining">*/}
            {/*                <Link to="/addcontact">*/}
            {/*                    <button className="btn btn-success btn-block bg-dark hoveringadd">Add*/}
            {/*                        Contact <i*/}
            {/*                            className="bi-plus-circle-fill"></i></button>*/}
            {/*                </Link>*/}


            {/*            </div>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}
            <Mininavbar makesearch={makesearch} search={search}/>

            {
                filteredcontacts.length > 0 ?
                    <section className="mt-3">
                        <div className="container">
                            <div className="row">
                                {
                                    filteredcontacts.map((contact, index) => {
                                        return (
                                            <div className="col-sm-6 mt-3" key={index}>
                                                {
                                                    contact &&
                                                    <Dummycard contact={contact} deletecontact={deletecontact}/>
                                                }
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </section>
                    : <>
                    </>
            }


        </>
    )
}

export default Home;