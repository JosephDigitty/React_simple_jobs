import Hero from "../Components/Hero";
import Homecards from "../Components/Homecards";
import Joblistings from "../Components/JobListings";
import Viewall from "../Components/ViewAll";

const HomePage = () => {
    return ( 
        <>
   <Hero/>
   <Homecards/>
   <Joblistings isHome={true}/>
   <Viewall />
    </> 
     );
}
 
export default HomePage;