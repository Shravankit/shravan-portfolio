import React from 'react';
import "./AdditionalPagesStyles/AboutPage.css";

export default function AboutPage()
{
    return <section id='aboutPage' className='allSections'>
        <h1>About Me</h1>
        <img src={'images/ProfileImage.png'} alt='about me page' />
        <p>
            I am Sravan, a dynamic 3D artist, web developer, and game developer with three years of experience, leaving an indelible mark on the industry. As a visionary, I craft captivating digital worlds and deliver dynamic, user-centric experiences in web development and game storytelling.
        </p>
        <p>
            Committed to excellence, I exceed expectations, turning visions into reality with dedication and ingenuity. Join me on an adventure where possibilities are limitless.
        </p>
        <p>
            I firmly believe in the power of teamwork to achieve outstanding results. Collaborative efforts blend diverse perspectives, foster creativity, and maximize efficiency. Embracing collaboration and leveraging our unique talents, let's strive for excellence as a unified team.
        </p>
    </section>
}