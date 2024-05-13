import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import ghIcon from './assets/github-mark-white.png';
import RandomVideo from './VideoPlayer';
import db from './db';
import { openDB } from 'idb';
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { fetchRandomVideo } from './youtubeService';

const App = () => {
  const [videoId, setVideoId] = useState('');
  const [video, setVideo] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const generateRandomVideo = async () => {
    const id = await fetchRandomVideo();
    setVideoId(id);
  };
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

// handle like and dislike count in db
  const handleLike = async () => {
    // setLikeCount(likes + 1);
    const db = await openDB('likesDB', 1, {
      upgrade(db) {
        db.createObjectStore('likes');
      },
    });
    await db.add('likes', likes + 1, new Date());
    setLikes(likes + 1);
  };

   const handleDislike = async () => {
    // setDislikeCount(dislikes + 1);
    const db = await openDB('likesDB', 1);
    await db.add('likes', dislikes + 1, new Date());
    setDislikes(dislikes + 1);

  };

  return (
    <div className="maindiv">
      <h1>Random Video Generator</h1>
      <p>Generate a random video based on your search query.</p>
      <form onSubmit= {async (e) => {
        e.preventDefault();
        const randomVideo = await fetchRandomVideo (searchQuery)
        console.log(randomVideo)
        setVideo(randomVideo)}}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter search query"
        />
        <button type="submit"><BsSearch /></button>
      </form>
      <RandomVideo video= {video}/>
      <p className= "likenumber">{likes}</p>
      <button className="likebtn" onClick={handleLike}><AiFillLike /></button>
      <p className= "dislikenumber">{dislikes}</p>
      <button className="dislikebtn" onClick={handleDislike}><AiFillDislike /></button>
      <footer>
      <a href="https://github.com/hobbsab">
        <img className= "footerImg" src={ghIcon} />
      </a>
      </footer>
    </div>
  );
};

export default App;