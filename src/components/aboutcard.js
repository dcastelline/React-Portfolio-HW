import React from 'react';
import Navbar from './navbar';
import AboutImg from './assets/AboutImg.png'

export default function AboutCard() {
    return (
        <div>
            <Navbar />
                <div className="row">
                    <img alt="Me" src={AboutImg} roundedCircle />
                </div>
                <div className="row">
                    <p>
                        Hello there.
                    </p>
                    <p>
                        I'm Daniel Castelline.  I was born and raised here in Austin.  I grew up fascinated by computers and played sports, and music all throughout school.  Spent time in the Marines and as a police officer in East Texas before moving back here to try something new.  I'm now a student in UT Austin's coding bootcamp studying full-stack web development.  Outside of coding I enjoy video games, the outdoors, playing lacrosse with the <a href="https://www.ajlc.org/#/">Austin Jazz Lacrosse Club</a>, and spending time with family.
                    </p>
                </div>
        </div>
        
    )
}