
import {toast} from "react-toastify"
export class Toastutil{
    public static displatinfotoast(message:string){
        return toast.info(message);
    }
    public static displaysuccess(message:string){
        return toast.success(message);
    }
    public static displayerror(message:string){
        return toast.error(message);
    }
}