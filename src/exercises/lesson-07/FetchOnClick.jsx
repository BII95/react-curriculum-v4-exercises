import './Lesson07Styles.css';
import { getSinglePost } from './api';
import { useState } from 'react';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  async function handleFetchPost() {
    try {
      setIsLoading(true);
      const data = await getSinglePost(1);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setPost(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button onClick={handleFetchPost}>Get post</button>
      {isLoading && <p>Loading...</p>}
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
