import React from 'react';
import HeroComponent from './HomeComponents/HeroComponent';
import SkillsComponent from './HomeComponents/SkillsComponents';
import AboutComponent from './HomeComponents/AboutComponent';
import PortfolioComponent from './HomeComponents/PortfolioComponent';
import ContactComponent from './HomeComponents/ContactComponent';

export default function Home()
{

    return<section>
       <HeroComponent />
       <SkillsComponent />
       <AboutComponent />
       <PortfolioComponent />
       <ContactComponent />
    </section>
}