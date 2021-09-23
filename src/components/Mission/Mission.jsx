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
        description="We have a mission where we have to make our clients satisfied
        without being disappointed"
        btnText="See Testimonials"
        img={missionImg}
        type="mission"
      />
    </div>
  );
};

export default Mission;
