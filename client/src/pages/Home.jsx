import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search
  
  console.log(cat)
  
  useEffect(() => {
    fetch(`http://localhost:9292/posts${cat}`)
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, [cat]);

  return (
    <div className="home">
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt={post.desc} />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;