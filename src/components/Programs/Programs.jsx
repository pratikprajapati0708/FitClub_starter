import React, { useState } from 'react'
import './Programs.css'
import { programsData } from '../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
import { Link } from 'react-scroll'
const Programs = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <div className="programs" id='programs'>
            <div className="programs-header">
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>
            <div className="program-categories-list">
                {programsData.map((program) => (
                    <div className="categories">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <span><Link
                                to='join-us' spy={true} smooth={true}
                                onClick={() => setMenuOpened(false)}
                                activeClass='active'
                            >Join Now</Link></span>
                            <span><img src={RightArrow} alt="" /></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Programs