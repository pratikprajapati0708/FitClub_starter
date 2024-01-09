import React, { useState } from 'react'
import './Hero.css'
import Header from './Header'
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import Heart from '../assets/heart.png'
import Calories from '../assets/calories.png'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'
import { Link } from 'react-scroll'

const Hero = () => {
    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <div className='Hero' id='home'>
            <div className='blur hero-blur'></div>
            <div className="left-h">
                <Header />
                <div className='the-best-ad'>
                    <motion.div
                        initial={{ left: mobile ? '165px' : '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    >
                    </motion.div>
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
                        <span><NumberCounter end={140} start={100} delay='4' prefix="+" /></span>
                        <span>experts</span>
                    </div>
                    <div>
                        <span><NumberCounter end={978} start={800} delay='4' prefix="+" /></span>
                        <span>members</span>
                    </div>
                    <div>
                        <span><NumberCounter end={50} start={0} delay='4' prefix="+" /></span>
                        <span>fitness programs</span>
                    </div>
                </div>
                <div className='hero-buttons'>
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn"><Link
                    to='join-us' spy={true} smooth={true}
                    onClick={() => setMenuOpened(false)}
                    activeClass='active'
                >Join Us</Link></button>
                <motion.div className="heart-bpm"
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}
                >
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                <img src={hero_image} alt="" className='hero-img' />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '28rem' }}
                    transition={transition}
                    src={hero_image_back} alt="" className='hero-img-back' />
                <motion.div className="calories-burned"
                    initial={{ right: "37rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                >
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220kCal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero