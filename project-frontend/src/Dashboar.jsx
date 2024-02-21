import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

export default function Dashboard() {
    const [active, setActive] = useState('Projects'); // Set default active state to 'Projects'
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/project')
            .then(response => {
                setProjects(response.data)
            })
            .catch(error => {
                console.error(error);
            });
    }, []); // Added an empty dependency array to ensure useEffect runs only once on component mount

    const handleActive = (e) => {
        setActive(e.target.innerText); // Change active state based on button text
    }

    return (
        <section id='dashboard-section' className='allSections'>
            Dashboard
            <div className='dashboard-components'>
                <div className='dashboard-options'>
                    <button onClick={handleActive}>Projects</button>
                    <button onClick={handleActive}>Blogs</button>
                </div>
                <div className='dashboard'>
                    {active === 'Projects' ? (
                        projects.map((project, index) => ( // Fixed mapping over projects array
                            <div className='project' key={index}>
                                <h2>{project.querierName}</h2>
                                <h1>{project.projectTitle}</h1>
                                <p>{project.projectDescription}</p>
                                <div>
                                    <h3>{project.querierNumber}</h3>
                                    <h3>{project.querierEmail}</h3>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1>Blogs</h1>
                    )}
                </div>
            </div>
        </section>
    );
}
