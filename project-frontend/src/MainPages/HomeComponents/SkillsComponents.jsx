import React, {useEffect, useRef, useState} from 'react';
import './HomeComponentsStyles/SkillsComponent.css';

export default function SkillsComponent() 
{
    const [skillDiv, setSkillDiv] = useState(false);
    const sectionRef = useRef();

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.target === sectionRef.current) {
                    setSkillDiv(entry.isIntersecting);
                }
            });
        }, options);

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return <section id='skills-Component' className='allSections'>
        <div className='skills-section'  ref={sectionRef}>
            <div className={`skill ${skillDiv ? 'skillAnim1' : '' }`}>
                <h1>
                    3D Artist
                </h1>
                <p>
                    Proficient in crafting high-quality, lifelike 3D models with meticulous attention to detail, encompassing both organic and hard surface designs.
                </p>
            </div>
            <div className={`skill ${skillDiv ? 'skillAnim2' : '' }`}>
                <h1>
                    3D Animation
                </h1>
                <p>
                    Proficient in crafting high-quality, lifelike 3D models with meticulous attention to detail, encompassing both organic and hard surface designs.
                </p>
            </div>
            <div className={`skill ${skillDiv ? 'skillAnim3' : '' }`}>
                <h1>
                    Web Development
                </h1>
                <p>
                    Proficient in crafting high-quality, lifelike 3D models with meticulous attention to detail, encompassing both organic and hard surface designs.
                </p>
            </div>
            <div className={`skill ${skillDiv ? 'skillAnim4' : '' }`}>
                <h1>
                    Game Devlopment
                </h1>
                <p>
                    Proficient in crafting high-quality, lifelike 3D models with meticulous attention to detail, encompassing both organic and hard surface designs.
                </p>
            </div>
            
        </div>
    </section>
}