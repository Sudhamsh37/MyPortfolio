import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/passpic.png'
import html_logo from '../../assets/html_logo.svg'
import css_logo from '../../assets/css_logo.svg'
import tailwind_logo from '../../assets/tailwind_logo.svg'
import cpp_logo from '../../assets/c++_logo.svg'
import react_logo from '../../assets/react_logo.svg'
import js_logo from '../../assets/js_logo.svg'


const   About = () =>{
    return(
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt=""></img>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt=""></img>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a passionate web developer with a strong foundation in both front-end and back-end technologies.</p>
                        <p>As a problem solver, I thrive on finding solutions to complex challenges. Whether it's debugging a tricky issue, optimizing code, or designing.</p>
                    </div>
                    <div className="about-skills">
                        <img className='logos' src={html_logo} alt="" />
                        <img className='logos' src={css_logo} alt="" />
                        <img className='logos' src={js_logo} alt="" />
                        <img className='logos' src={tailwind_logo} alt="" />
                        <img className='logos' src={react_logo} alt="" />
                        <img className='logos' src={cpp_logo} alt="" />
                    </div>
                </div>
            </div>
            <div className="about-achievements">
            <div className="about-achievement">
                <h1>3</h1>
                <p>Completed Projects</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>2</h1>
                <p>Ongoing Projects</p>
            </div>
            </div>
        </div>
    )
}

export default About