import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Menu = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9292/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts))
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleClick = (desc) => {
        console.log(desc);
    };

    return (
        <div className='menu'>
            <h1>Other posts you may like</h1>
            {posts.map(post => (
                <div className="post" key={post.id}>
                    <img src={post.img} alt={post.title} />
                    <Link to="/">
                        <h2>{post.title}</h2>
                    </Link>
                    
                    <button onClick={()=>handleClick(post.desc)}>Read more</button>
                </div>
            ))}
        </div>
    );
};

export default Menu;
