import { Outlet } from "react-router-dom";
import Nav from "../Components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const Mainlayout = () => {
    return ( 
        <>
        <Nav/>
        <Outlet/>
        <ToastContainer/>
        </>
     );
}
 
export default Mainlayout;