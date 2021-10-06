import React from "react";
import "./_Common.scss";
import { useScroll } from "../../scroll-animations";
import { motion } from "framer-motion";
import { BoxAnimationLeft } from "../../animations";
import { BoxAnimationRight } from "../../animations";
import { useMediaQuery } from "react-responsive";

const Common = ({ title, headline, description, btnText, img, type }) => {
  const [element, controls] = useScroll();
  const [elementB, controlsB] = useScroll();
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <>
      {type === "mission" && (
        <>
          {isMobile && (
            <>
              <div className="mission">
                <div
                  variants={BoxAnimationLeft}
                  ref={element}
                  initial="hidden"
                  animate={controls}
                  className="mission-description"
                >
                  <h2>{title}</h2>
                  <h3>{headline}</h3>
                  <p>{description}</p>
                  <button href="" className="common-button">
                    {btnText}
                  </button>
                </div>

                <div>
                  <img className="mission-img-mobile" src={img} alt="" />
                </div>
              </div>
            </>
          )}
          {isMobile || (
            <>
              <div className="mission">
                <motion.div
                  variants={BoxAnimationLeft}
                  ref={element}
                  initial="hidden"
                  animate={controls}
                  className="mission-description"
                >
                  <h2>{title}</h2>
                  <h3>{headline}</h3>
                  <p>{description}</p>
                  <button href="" className="common-button">
                    {btnText}
                  </button>
                </motion.div>

                <div>
                  <img className="mission-img" src={img} alt="" />
                </div>
              </div>
            </>
          )}
        </>
      )}

      {type === "vision" && (
        <>
          {isMobile && (
            <>
              <div className="vision">
                <div className="vision-top">
                  <h2>{title}</h2>
                  <h3>{headline}</h3>
                  <img className="vision-img-mobile" src={img} alt="" />
                </div>
                <div
                  className="vision-description"
                  variants={BoxAnimationRight}
                  ref={elementB}
                  initial="hidden"
                  animate={controlsB}
                >
                  <div className="vision-bottom">
                    <p>{description}</p>
                    <button href="" className="common-button">
                      {btnText}
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
          {isMobile || (
            <>
              <div className="vision ">
                <div>
                  <img className="vision-img" src={img} alt="" />
                </div>

                <motion.div
                  variants={BoxAnimationRight}
                  ref={elementB}
                  initial="hidden"
                  animate={controlsB}
                >
                  <div className="vision-description">
                    <h2>{title}</h2>
                    <h3>{headline}</h3>

                    <p>{description}</p>
                    <button href="" className="common-button">
                      {btnText}
                    </button>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Common;