import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Blogs.css';

export default function Blogs() {
    const [title, setTitle] = useState('');
    const [data, setData] = useState('');
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/blogs');
                setBlogs(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const handlePost = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/blogs', {
                blogTitle: title,
                blogData: data,
            });
            console.log(response);
            setBlogs([...blogs, response.data]); // Add new blog to the list
            setTitle('');
            setData('');
        } catch (error) {
            console.error(error);
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/api/blogs/${id}`);
            setBlogs(blogs.filter(blog => blog._id !== id));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='blog'>
            <div className='blog-post'>
                <input type='text' placeholder='Blog Title' value={title} onChange={e => setTitle(e.target.value)} />
                <textarea type='text' placeholder='Blog Data' value={data} onChange={e => setData(e.target.value)} />
                <div className='blog-post-submit'>
                    <button type='submit' onClick={handlePost}>Post</button>
                </div>
            </div>
            <div className='posted-blogs'>
                {blogs.map(blog => (
                    <div key={blog._id} className='postedBlog'>
                        <h1>{blog.blogTitle}</h1>
                        <p>{blog.blogData}</p>
                        <button onClick={() => handleDelete(blog._id)} type='submit'>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
