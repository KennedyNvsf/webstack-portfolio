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
                  
                    <a href="#testemonials" className="common-button">{btnText}</a>
                  
                </motion.div>

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
                  <a href="#testemonials" className="common-button">
                    {btnText}
                  </a>
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
                <div>
                  <h2>{title}</h2>
                  <h3>{headline}</h3>
                  <img className="vision-img-mobile" src={img} alt="" />
                </div>
                <motion.div
                  variants={BoxAnimationRight}
                  ref={elementB}
                  initial="hidden"
                  animate={controlsB}
                  className="vision-description"
                >
                  <p>{description}</p>
                  <a href="#services" className="common-button vision-button-mobile">
                    {btnText}
                  </a>
                </motion.div>
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
                  className="vision-description"
                >
                  <h2>{title}</h2>
                  <h3>{headline}</h3>

                  <p>{description}</p>
                  <a href="#services" className="common-button">
                    {btnText}
                  </a>
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