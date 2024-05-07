import React, { useState } from 'react';
import { openDB } from 'idb';

const LikeDislikeButtons = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = async () => {
    const db = await openDB('likesDB', 1, {
      upgrade(db) {
        db.createObjectStore('likes');
      },
    });
    await db.add('likes', likes + 1, new Date());
    setLikes(likes + 1);
  };

  const handleDislike = async () => {
    const db = await openDB('likesDB', 1);
    await db.add('likes', dislikes + 1, new Date());
    setDislikes(dislikes + 1);
  };

  return (
    <div>
      <button onClick={handleLike}>Like</button>
      <span>{likes}</span>
      <button onClick={handleDislike}>Dislike</button>
      <span>{dislikes}</span>
    </div>
  );
};

export default LikeDislikeButtons;