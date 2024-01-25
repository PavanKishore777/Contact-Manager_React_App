export interface IContact {
    name: string;
    company: string;
    email: string;
    title: string;
    mobile: string;
    imageurl: string;
    groupId: string;
    /*groupName?:string; use it when you use groupname the 47 line code*/
    id?: string;/*id is optional bcz itis created by server not by adding a contact by user so thats why it is optional*/
}

