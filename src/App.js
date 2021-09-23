import "./styles/app.scss";
//COMPONENTS
import NavBar from "./components/navbar/NavBar";
import IntroSection from "./components/introsection/IntroSection";
import TeamMembers from "./components/TeamMembers/TeamMembers";
import Vision from "./components/Vision/Vision";
import Common from "./components/Common/Common";
import {Marginer} from "./components/Marginer";
import Mission from "./components/Mission/Mission";

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
      </AnimatePresence>
    </div>

  );
}

export default App;


