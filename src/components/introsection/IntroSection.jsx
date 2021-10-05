import React from 'react';
import "../introsection/_introsection.scss";//styles
import leftSide from "../../images/lefticons.png";
import rightSide from "../../images/righticons.png";
import devCartoon from "../../images/developercartoon.png";
//ANIMATIONS
import {motion} from "framer-motion";
import { BoxAnimationLeft } from '../../animations';
import {BoxAnimationRight } from '../../animations';
import { BoxAnimationUp } from '../../animations';

const IntroSection = () => {

    return (

        <div className="introSection" id="home">

            <motion.div variants={BoxAnimationLeft} initial="hidden" animate="show" className="leftside">
                <img src={leftSide} alt="" />
            </motion.div>

            <motion.div variants={BoxAnimationUp} initial="hidden" animate="show" className="middleSection">

                <div className="introText">
                    <h1>Build your dream project <br/>with <span className="title_span">Web</span>Stack </h1>
                    
                    <p>We will help you to realize your dream project. So what are you
                    waiting for, cooperate with us</p>

                    <div className="intro_btn">

                        <a href="#hire" className="intro_startedBtn">Get Started</a>
                        <a href="#services" className="intro_learnBtn">Learn More</a>

                    </div>
                </div>

                <div className="introImage">

                    <img className="cartoonImg" src={devCartoon} alt="" />

                </div>

            </motion.div>

            <motion.div variants={BoxAnimationRight} initial="hidden" animate="show" className="rightside">
                <img src={rightSide} alt="" />
            </motion.div>
        </div>
    )
}

export default IntroSection;