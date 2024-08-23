import React, { useState } from "react";
import '../styles/HeroSection.css';
import HomeImg from '../img/home.svg';

export const HeroSection: React.FC = () => {
    return (
        <div>
            <div className="content">
                <div className="content-left">
                    <h1 className="m-1">Typing</h1>
                    <p className="m-1">The basic technique stands in contrast to hunt and peck typing in which the typist keeps their eyes
                        on the source copy at all times. Touch typing also involves the use of the home row method, where
                        typists rest their wrist down, rather than lifting up and typing (which can cause carpal tunnel
                        syndrome). To avoid this, typists should sit up tall, leaning slightly forward from the waist, place
                        their feet flat on the floor in front of them with one foot slightly in front of the other, and keep
                        their elbows close to their sides with forearms slanted slightly upward to the keyboard; fingers
                        should be curved slightly and rest on the home row.</p>
                </div>
                <div className="content-right">
                    <img src={HomeImg} alt="HeroSectionImage"/>
                </div>
            </div>
        </div>
    );
};