import React from 'react';
import portfolioImages from '../PotfolioData';
import "./AdditionalPagesStyles/PortfolioPage.css";

export default function PortfolioPage()
{
    return <section id='portfolioPage' className='allSections portfolio' >
    <div className='portfolioPage-Heading'>
        <h1>
            Portfolio
        </h1>
    </div>
        <div className='portfolioPage-gallery'>
            {portfolioImages.map((images) => {
                return(
                <div key={images.id} className='portfolioPage-images'>
                    <img src={images.imageURL} alt={images.alt} />
                </div>)
            })}
        </div>
    </section>
}