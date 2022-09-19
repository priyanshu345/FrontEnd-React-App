import React from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import { useState } from 'react';

const HeroSection = ({
    lightBg, topLine, lightText, lightTextDesc, headLine, description, buttonLabel, img, alt, imgStart
}) => {

    const [lightMode, setLightMode] = useState(false);
    const handleLightMode = () => {
        setLightMode(!lightMode);
    }

    if (lightMode){
        lightBg= true;
        lightText= false;
        lightTextDesc= false;
    }else{
        lightBg= false;
        lightText= true;
        lightTextDesc= true;
    }

    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className="container">
                    <div className="row home__hero-row"
                        style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}
                    >
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>
                                    {headLine}</h1>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                                <Link to='/signup'>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper">
                                <img src={img} alt={alt} className="home__hero-img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="moodChange">
                    <p className={lightMode ? 'para infodark' : 'para infolight'}>{lightMode ? 'Light Mode' : 'Dark Mode'}</p>
                    <div className={lightMode ? 'light-slider light' : 'light-slider dark'} onClick={handleLightMode}>
                        <div className={lightMode ? 'mood changelight' : 'mood changedark'}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection