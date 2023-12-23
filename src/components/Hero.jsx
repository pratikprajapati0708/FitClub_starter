import React from 'react'
import './Hero.css'
import Header from './Header'
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import Heart from '../assets/heart.png'
import Calories from '../assets/calories.png'
const Hero = () => {
    return (
        <div className='Hero'>
            <div className="left-h">
                <Header />
                <div className='the-best-ad'>
                    <div></div>
                    <span>The best fitness club in the Town</span>
                </div>
                <div className="hero-text-heading">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div className='span'>
                        In here we will help you to shape and build your ideal body and live up your life to the fullest.
                    </div>
                </div>
                <div className="text-figures">
                    <div>
                        <span>+140</span>
                        <span>experts</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>members</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>
                </div>
                <div className='hero-buttons'>
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            <div className="right-h">
               <button className="btn">Join Now</button>
               <div className="heart-bpm">
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
               </div>
               <img src={hero_image} alt="" className='hero-img'/>
               <img src={hero_image_back} alt="" className='hero-img-back' />
               <div className="calories-burned">
                <img src={Calories} alt="" />
                <div>
                <span>Calories Burned</span>
                <span>220kCal</span>
                </div>
               </div>
            </div>
        </div>
    )
}

export default Hero