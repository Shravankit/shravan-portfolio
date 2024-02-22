import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './AdditionalPagesStyles/Blog.css';

export default function Blog()
{

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/blogs')
        .then(response => {
            setBlog(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    return<section id='blog-section' className='allSectons'>
        <div className='blogHeading'><h1>Blogs</h1></div>
        <div className='posted-blog'>
            {blog.map((e) => {
                return <div key={e._id} className='posted-Blog'>
                    <h1>{e.blogTitle}</h1>
                    <p>{e.blogData}</p>
                </div>
            })}
        </div>
    </section>
}