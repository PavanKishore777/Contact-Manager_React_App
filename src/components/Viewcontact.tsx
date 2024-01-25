import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import Heading from "./Heading";
import {Link, useParams} from "react-router-dom";
import imagee2 from "../images/Contact images.jpg"
import {IContact} from "../model/IContact";
import {Contactservice} from "../services/Contactservice";
import Loading from "../Loading/Loading";
import errorMessage from "../Error/ErrorMessage";
import "./styles/floating.css"
import {IGroup} from "../model/IGroup";

interface IState {
    loading: boolean;
    contact: IContact;
    ErrorMessage: string;
    group: IGroup;
}

const Viewcontact: React.FC = () => {
    const {contactId} = useParams();
    const [state, setState] = useState<IState>({
        loading: false,
        contact: {} as IContact,
        ErrorMessage: "",
        group: {} as IGroup,
    });
    useEffect(() => {
        if (contactId) {
            getcontactsfromserver(contactId)
        }
    }, [contactId]);


    const getcontactsfromserver = (contactId: string) => {
        setState({...state, loading: true});

        Contactservice.getcontact(contactId).then((contactresponse) => {
            const contact = contactresponse.data;
            Contactservice.getgroup(contact).then((groupresponse) => {
                const group = groupresponse.data;
                setState({
                    ...state,
                    loading: false,
                    contact: contact,
                    group: group,
                })
            }).catch((error) => {
                console.log(error);
                setState({
                    ...state,
                    loading: false,
                    ErrorMessage: error.message
                });
            });
        }).catch((error) => {
            console.log(error);
            setState({
                ...state,
                loading: false,
                ErrorMessage: error.message
            });
        });
    }
    /**
     * few more methods by using different approaches are below of this component export line-106
     * @param contactId
     */
        // const getcontactsfromserver = (contactId: string) => {
        //     setState({ ...state, loading: true });
        //
        //     Contactservice.getcontact(contactId)
        //         .then((contactResponse) => {
        //             const contactData = contactResponse.data;
        //
        //             return Contactservice.getgroup(contactData)
        //                 .then((groupResponse) => {
        //                     const groupName = groupResponse.data.name;
        //
        //                     // Enrich contact with group name
        //                     const contactWithGroupName = { ...contactData, groupName };
        //
        //                     setState({ ...state, loading: false, contact: contactWithGroupName });
        //                 });
        //         })
        //         .catch((error) => {
        //             setState({ ...state, loading: false, ErrorMessage: error.message });
        //         });
        // };
    const {loading, contact, ErrorMessage, group} = state;
    return (
        <>
            {loading && <Loading/>}
            <Heading Headingone="View" Headingtwo="Contact" color="text-warning" colortwo="text-dark"/>
            {!loading && errorMessage.length > 0 && <ErrorMessage/>}
            {
                contact && group && Object.keys(contact).length > 0 && Object.keys(group).length > 0 &&
                <section className="mt-3">
                    <div className="container">
                        <div className="row mt-3 align-items-center" id="contact-row">
                            <div className="col-sm-4  mx-0">
                                <img style={{width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%'}}
                                     className="img-fluid   shadow-lg bg-white contact-image" src={contact.imageurl}
                                     alt=""/>
                            </div>
                            <div className="col-sm-7 offset-1 mx-0">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Name : <span className="fw-bold text-warning">{contact.name}</span>
                                    </li>
                                    <li className="list-group-item">
                                        E-mail : <span className="fw-bold text-warning">{contact.email}</span>
                                    </li>
                                    <li className="list-group-item">
                                        Mobile.no : <span className="fw-bold text-warning">{contact.mobile}</span>
                                    </li>
                                    <li className="list-group-item">
                                        Company : <span className="fw-bold text-warning">{contact.company}</span>
                                    </li>
                                    <li className="list-group-item">
                                        Group : <span className="fw-bold text-warning">{group.name}</span>
                                    </li>
                                    <li className="list-group-item">
                                        Title : <span className="fw-bold text-warning">{contact.title}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <Link to={`/home`} className="btn btn-warning"> <i
                                    className="bi bi-arrow-left-circle-fill"></i> Back</Link>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}
export default Viewcontact;


/** this is simple to only get the group ID
 *
 *    const  getcontactsfromserver=(contactId:string)=>{
 *         setState({...state,loading:true,});
 *         Contactservice.getcontact(contactId).then((response)=>{
 *             setState({...state,loading:false,contact:response.data})
 *
 *         }).catch((error)=>{
 *             setState({...state,loading:false,ErrorMessage:error.message})
 *         })
 *     }
 *
 */

/**
 * this is a using promise async/await to get grp name
 *
 * const getcontactsfromserver = (contactId: string) => {
 *         setState({ ...state, loading: true });
 *
 *         Promise.all([Contactservice.getcontact(contactId), Contactservice.getallgroups()])
 *             .then(([contactResponse, groupResponse]) => {
 *                 const contactData = contactResponse.data;
 *                 const groups = groupResponse.data;
 *
 *                 // Enrich contacts with group names
 *                 const contactsWithGroupNames = Contactservice.enrichContactsWithGroupNames([contactData], groups);
 *
 *                 setState({ ...state, loading: false, contact: contactsWithGroupNames[0] });
 *             })
 *             .catch((error) => {
 *                 setState({ ...state, loading: false, ErrorMessage: error.message });
 *             });
 *     };
 *
 *     this is by using await
 *
 *     const getcontactsfromserver = async (contactId: string) => {
 *   try {
 *     setState({ ...state, loading: true });
 *
 *     const contactResponse = await Contactservice.getcontact(contactId);
 *     const contactData = contactResponse.data;
 *
 *     const groupResponse = await Contactservice.getgroup(contactData);
 *     const groupName = groupResponse.data.name;
 *
 *     // Enrich contact with group name
 *     const contactWithGroupName = { ...contactData, groupName };
 *
 *     setState({ ...state, loading: false, contact: contactWithGroupName });
 *   } catch (error) {
 *     setState({ ...state, loading: false, ErrorMessage: error.message });
 *   }
 * };
 *
 * this is by sing async
 *
 * const getcontactsfromserver = async (contactId: string) => {
 *   try {
 *     setState({ ...state, loading: true });
 *
 *     const contactResponse = await Contactservice.getcontact(contactId);
 *     const groupResponse = await Contactservice.getgroup(contactResponse.data);
 *
 *     const contactData = contactResponse.data;
 *     const groupName = groupResponse.data.name;
 *
 *     // Enrich contact with group name
 *     const contactWithGroupName = { ...contactData, groupName };
 *
 *     setState({ ...state, loading: false, contact: contactWithGroupName });
 *   } catch (error) {
 *     setState({ ...state, loading: false, ErrorMessage: error.message });
 *   }
 * };
 */