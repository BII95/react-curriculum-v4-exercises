import { useEffect, useState } from 'react';
import './Lesson07Styles.css';
import { getPosts } from './api';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
