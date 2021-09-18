
import React from 'react';
import "../introsection/_introsection.scss";//styles
import leftSide from "../../images/lefticons.png";
import rightSide from "../../images/righticons.png";
import devCartoon from "../../images/developercartoon.png"

const IntroSection = () => {

    return (

        <div className="introSection">

            <div className="leftside">
                <img src={leftSide} alt="" />
            </div>

            <div className="middleSection">

                <div className="introText">
                    <h1>Build your dream project <br/>with <span className="title_span">Web</span>Stack </h1>
                    
                    <p>We will help you to realize your dream project. So what are you
                    waiting for, cooperate with us</p>

                    <div className="intro_btn">

                        <button className="intro_startedBtn">Get Started</button>
                        <button className="intro_learnBtn">Learn More</button>

                    </div>
                </div>

                <div className="introImage">

                    <img className="cartoonImg" src={devCartoon} alt="" />

                </div>

            </div>

            <div className="rightside">
                <img src={rightSide} alt="" />
            </div>
        </div>
    )
}

export default IntroSection;