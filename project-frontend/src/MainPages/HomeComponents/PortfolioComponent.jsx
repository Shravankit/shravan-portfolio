import React from 'react';
import './HomeComponentsStyles/PortfolioComponent.css';
import portfolioImages from '../../PotfolioData';

export default function PortfolioComponent()
{
    return <section id='portfolio-section' className='allSections'>
        <div className='portfolio-title'>
            <h1>
                Portfolio
            </h1>
        </div>
        <div className='portfolio-images'>
            {portfolioImages.map((images) => (
                <div key={images.id}>
                    <img src={images.imageURL} alt={images.alt} />
                </div>
            ))}
        </div>
    </section>
}