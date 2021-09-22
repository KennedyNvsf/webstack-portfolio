import React from "react";
import "./Common.css";

const Common = ({ title, headline, description, btnText, img, type }) => {
  return (
    <div>
      {type === "mission" && (
        <div className="common">
          <div className="common-description">
            <h2>{title}</h2>
            <h3>{headline}</h3>
            <p>{description}</p>
            <button href="" className="common-button">
              {btnText}
            </button>
          </div>
          <div>
            <img className="mission-img" src={img} alt="" />
          </div>
        </div>
      )}

      {type === "vision" && (
        <div className="common ">
          <div>
            <img className="vision-img" src={img} alt="" />
          </div>
          <div className="vision-description">
            <h2>{title}</h2>
            <h3>{headline}</h3>

            <p>{description}</p>
            <button href="" className="common-button">
              {btnText}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Common;
