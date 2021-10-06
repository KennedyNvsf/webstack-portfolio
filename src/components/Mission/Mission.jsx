import React from "react";
import Common from "../Common/Common";
import missionImg from "../../images/mission.png";


const Mission = () => {

  

  return (
    <div>
      <Common
        title="Our Mission"
        headline="We will provide satisfactory service to
        clients"
        description="Our Mission is to Provide Eye catching and Modern Website Layouts for our Clients, Fast and Efficiently"
        btnText="See Testimonials"
        img={missionImg}
        type="mission"
      />
    </div>
  );
};

export default Mission;



// Our Mission is to Provide Eye catching and Modern Website Layouts for our Clients, Fast and Efficiently