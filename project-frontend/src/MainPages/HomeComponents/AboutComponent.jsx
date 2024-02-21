import React, {useEffect, useRef, useState} from 'react';
import './HomeComponentsStyles/AboutComponent.css';

export default function AboutComponent()
{
    const [aboutVisible, setAboutVisible] = useState();

    const aboutRef = useRef();

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.target === aboutRef.current)
                {
                    setAboutVisible(entry.isIntersecting);
                }
            });
        }, options);

        if(aboutRef.current)
        {
            observer.observe(aboutRef.current);
        }

        return () => {
            if(aboutRef.current)
            {
                observer.unobserve(aboutRef.current);
            }
        }
    }, [])

    return <section id='about-section' className='allSections' ref={aboutRef}>
        <div className={`aboutComponent-image ${aboutVisible ? 'aboutImgAnim' : ''}`}>
            <img src={'images/ProfileImage.png'} alt='profile about main' />
        </div>
        <div className={`aboutComponent ${aboutVisible ? 'aboutComponentAnim' : ''}`}>
            <h1 className={`about ${aboutVisible ? 'aboutContent1Anim' : ''}`}>
                About Me
            </h1>
            <h2 className={`about ${aboutVisible ? 'aboutContent2Anim' : ''}`}>
                I am Sravan, a dynamic 3D artist, web developer, and game developer with three years of experience, leaving an indelible mark on the industry. As a visionary, I craft captivating digital worlds and deliver dynamic, user-centric experiences in web development and game storytelling. 
            </h2>
            <h2 className={`about ${aboutVisible ? 'aboutContent3Anim' : ''}`}>
                Committed to excellence, I exceed expectations, turning visions into reality with dedication and ingenuity. Join me on an adventure where possibilities are limitless. 
            </h2>
            <h2 className={`about ${aboutVisible ? 'aboutContent4Anim' : ''}`}>
                I firmly believe in the power of teamwork to achieve outstanding results. Collaborative efforts blend diverse perspectives, foster creativity, and maximize efficiency. Embracing collaboration and leveraging our unique talents, let's strive for excellence as a unified team.
            </h2>
        </div>
    </section>
}