import React from 'react'
import './Hero.css'
import profile_img from '../../assets/passpic.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const   Hero = () =>{
    return(
        <div id='home' className='hero'>
            <img src={profile_img} alt=''/>
            <h1>Hi,I'm <span> Ch.Sudhamsh</span>,building modern websites & solving coding challenges.</h1>
            <p>I am currently pursuing a BTech in Computer Science and Engineering from IIT Bhubaneswar, and I am in my 3rd year.</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                    Connect With Me
                    </AnchorLink>
                </div>
                <div className="hero-resume">
                <a className='resume' href="/resume-4.pdf" target="_blank" rel="noopener noreferrer">
                    My Resume
                </a>
                </div>
            </div>
        </div>
    )
}

export default Hero