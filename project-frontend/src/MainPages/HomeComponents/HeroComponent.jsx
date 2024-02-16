import React from 'react';
import './HomeComponentsStyles/HeroComponent.css';

export default function HeroComponent()
{
    return <section id='heroComponent' className='allSections'>
        <div className='hero-component'>
            <h1>
                WELCOME
            </h1>
            <h2>
                Here, you'll find a comprehensive glimpse into my world – from my captivating 3D artistry to my growing expertise in web development.
            </h2>
        </div>
        <div className='hero-section-images'>
            <img src={'images/ProfileImage.png'} alt='herosection main'/>
        </div>
    </section>
}