import React, { useState } from 'react';
import { openDB } from 'idb';

const LikeDislikeButtons = () => {

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