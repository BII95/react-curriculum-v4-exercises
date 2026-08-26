import './Lesson07Styles.css';
import { getSinglePost } from './api';
import { useState } from 'react';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  async function handleFetchPost() {
    try {
      const data = await getSinglePost(1);
      setPost(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button onClick={handleFetchPost}>Get post</button>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
      <div className="content"></div>
    </div>
  );
}
