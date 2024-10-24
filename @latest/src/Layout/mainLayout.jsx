import { Outlet } from "react-router-dom";
import Nav from "../Components/Navbar";

const Mainlayout = () => {
    return ( 
        <>
        <Nav/>
        <Outlet/>
        </>
     );
}
 
export default Mainlayout;