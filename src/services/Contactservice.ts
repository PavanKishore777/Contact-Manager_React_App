import {IContact} from "../model/IContact";
import axios from 'axios';
import {IGroup} from "../model/IGroup";

export class Contactservice {
    private static serverurl:string=`http://localhost:9000`;
    public static getallcontacts():Promise<{data :IContact[]}>{
        let dataurl:string=`${this.serverurl}/contacts`;
        return axios.get(dataurl);
    }

    public static getcontact(contactId:string):Promise<{data :IContact}>{
        let dataurl:string=`${this.serverurl}/contacts/${contactId}`;
        return axios.get(dataurl);
    }

    public static createcontact(contact:IContact):Promise<{data:IContact}>{
        let dataurl:string=`${this.serverurl}/contacts/`;
        return axios.post(dataurl,contact);
    }

    public static updatecontact(contact:IContact,contactId:string):Promise<{data:IContact}>{
        let dataurl:string=`${this.serverurl}/contacts/${contactId}`;
        return axios.put(dataurl,contact);
    }

    public static deletecontact(contactId:string):Promise<{data:IContact}>{
        let dataurl:string=`${this.serverurl}/contacts/${contactId}`;
        return axios.delete(dataurl);
    }

    public static getallgroups():Promise<{data :IGroup[]}>{
        let dataurl:string=`${this.serverurl}/groups`;
        return axios.get(dataurl);
    }

    public static getgroup(contact:IContact):Promise<{data :IGroup}>{
        let{groupId}=contact;
        let dataurl:string=`${this.serverurl}/groups/${groupId}`;
        return axios.get(dataurl);
    }

    /**
     *
     * @param groupId
     * @param groups
     * this are function has to be used when the async / await methods in the view contact
     *
     *
     * public static getGroupName(groupId: string, groups: IGroup[]): string {
     *         const group = groups.find((group) => group.id === groupId);
     *         return group ? group.name : "Group not found";
     *     }
     *
     *     public static enrichContactsWithGroupNames(contacts: IContact[], groups: IGroup[]): IContact[] {
     *         return contacts.map((contact) => ({
     *             ...contact,
     *             groupName: this.getGroupName(contact.groupId, groups),
     *         }));
     *     }
     */





}