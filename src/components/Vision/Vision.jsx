import React from "react";
import Common from "../Common/Common";
import visionImg from "../../images/vision.png";

const Vision = () => {
  return (
    <div>
      <Common
        title="Our Vision"
        headline="Number one is client satisfaction, we won't let you down"
        description="Our vision is to provide services to clients with abilities according
        to their respective fields"
        btnText="See Features"
        img={visionImg}
        type="vision"
      />
    </div>
  );
};

export default Vision;
