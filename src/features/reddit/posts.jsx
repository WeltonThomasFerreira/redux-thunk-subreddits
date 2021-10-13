import React from 'react';
import { useSelector } from 'react-redux';

export default function Posts() {
  const { query, posts } = useSelector((state) => state.reddit);
  if (posts === null) {
    return null;
  }
  if ('error' in posts) {
    return `Nenhuma coreespondência para "${query}"`;
  }
  return (
    <ul>
      {posts.data.children.map((post) => (
        <li key={post.data.created_utc}>{post.data.title}</li>
      ))}
    </ul>
  );
}
