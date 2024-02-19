import React, {useState} from 'react';
import axios from 'axios';
import './HomeComponentsStyles/ContacctComponent.css';

export default function ContactComponent()
{
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');

    const submitProject = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:3001/api/project', {
                querierName: name,
                querierNumber: mobileNumber,
                querierEmail: email,
                projectTitle: title,
                projectDescription: details,
            });

            console.log(response);
        } catch (error) {
            console.error('Error : ', error);
        }
    }


    return<section id='contact-section' className='allSections'>
        <div className='contact'>
            <div className='contact-image'>
                <h1>
                    Exicited to work Together
                </h1>
            </div>
            <div className='contact-form'>
                <form>
                    <div className='name-number'>
                        <input type='text' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
                        <input type='number' placeholder='Enter your Mobile Number' value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                    </div>
                    <input type='text' placeholder='Enter your Email' value={email} onChange={e => setEmail(e.target.value)} />
                    <input type='text' placeholder='Project title' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea type='text' placeholder='Project details' value={details} onChange={(e) => setDetails(e.target.value)} />
                    <button onClick={submitProject}>Post Project</button>
                </form>
            </div>
        </div>
    </section>
}