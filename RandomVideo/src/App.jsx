import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import ghIcon from './assets/github-mark-white.png';
import RandomVideo from './VideoPlayer';
// import db from './db';
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

  const handleLike = () => {
    db.likes.add({ id: videoId });
  };

  const handleDislike = () => {
    db.dislikes.add({ id: videoId });
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
      <button className="likebtn" onClick={handleLike}>Like <AiFillLike /></button>
      <button className="dislikebtn" onClick={handleDislike}>Dislike <AiFillDislike /></button>
      <footer>
      <a href="https://github.com/hobbsab">
        <img className= "footerImg" src={ghIcon} />
      </a>
      </footer>
    </div>
  );
};

export default App;