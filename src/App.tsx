import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Addcontact from "./components/Addcontact";
import Aboutus from "./components/extrafilesd/Aboutus";
import Editcontact from "./components/Editcontact";
import Viewcontact from "./components/Viewcontact";
import ErrorMessage from "./Error/ErrorMessage";
import Loading from "./Loading/Loading";
import {ToastContainer} from "react-toastify";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar headingone="Contact" headingtwo=" Manager" color="bg-light"/>
                <Routes>
                    <Route path={`/`} element={<Landing/>}/>
                    <Route path={`/error`} element={<ErrorMessage/>}/>
                    <Route path={'/home'} element={<Home/>}/>
                    <Route path={`/addcontact`} element={<Addcontact/>}/>
                    <Route path={`/aboutus`} element={<Aboutus/>}/>
                    <Route path={`/contact/edit/:contactId`} element={<Editcontact/>}/>
                    <Route path={`/contact/view/:contactId`} element={<Viewcontact/>}/>
                    {/*<Route path={`*`} element={<ErrorMessage/>}/>*/}
                    <Route path={`/loading`} element={<Loading/>}/>
                </Routes>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;


