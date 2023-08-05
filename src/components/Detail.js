// components/Detail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Detail = () => {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === parseInt(id))
  );

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>Detail Page</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
    </div>
  );
};

export default Detail;
