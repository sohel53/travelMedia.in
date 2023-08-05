// components/Post.js
import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <Link to={`/item/${post.id}`}>View Details</Link>
    </div>
  );
};

export default Post;
