import "./styles/app.scss";
//COMPONENTS
import NavBar from "./components/navbar/NavBar";
import IntroSection from "./components/introsection/IntroSection";
import TeamMembers from "./components/TeamMembers/TeamMembers";
import Vision from "./components/Vision/Vision";
// import Common from "./components/Common/Common";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

import {Marginer} from "./components/Marginer";
import Mission from "./components/Mission/Mission";
import ServicesSection from "./components/servicesOffered/ServicesSection";

import { AnimatePresence } from "framer-motion"; //DETECTS WHEN THE MOUNTED COMPONENT LEAVES THE SCREEN.

function App() {

  return (

    <div className="App">

      <NavBar/>
    

      <AnimatePresence exitBeforeEnter>
           <IntroSection/>
           <TeamMembers/>

           <Marginer direction="vertical" margin="4em"/>
              <Mission/>
           <Marginer direction="vertical" margin="4em"/>
            <Vision/>
            <Marginer direction="vertical" margin="3em" />
              <ServicesSection/>
            <Marginer direction="vertical" margin="3em" />
             <Testimonials />

       </AnimatePresence>
       
            <Marginer direction="vertical" margin="6em" />
             <Footer />
            <Marginer direction="vertical" margin="1em" />
      
    </div>

  );
}

export default App;


