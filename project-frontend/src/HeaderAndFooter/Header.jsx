import React from 'react';
import {Link} from 'react-router-dom';
import './HeaderAndFooterStyles/Header.css';

export default function Header() 
{
    return<header>
        <div className='Logo'>
            <h1><Link to='/'>Shravan</Link></h1>
        </div>
        <div className='navigations'> 
            <ul>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    </header>
}