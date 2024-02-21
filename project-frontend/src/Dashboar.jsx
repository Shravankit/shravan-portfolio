import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

export default function Dashboard()
{
    const [project, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/project')
        .then(response => {
            setProjects(response.data)
        })
        .catch(error => {
            console.error(error);
        });
    });
    return<section id='dashboard-section' className='allSections'>
        Dashboard
        <div className='dashboard'>
            {project.map((projects) => {
                return <div className='project'>
                    <h2>{projects.querierName}</h2>
                    <h1>{projects.projectTitle}</h1>
                    <p>{projects.projectDescription}</p>
                    <div>
                        <h3>{projects.querierNumber}</h3>
                        <h3>{projects.querierEmail}</h3>
                    </div>
                </div>
            })}
        </div>
    </section>
}