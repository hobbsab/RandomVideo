import React, { useState, useEffect } from 'react';
import { fetchRandomVideo } from './youtubeService';

const RandomVideo = (props) => {
  const [video, setVideo] = useState(props.video);
console.log(props)
  useEffect(() => {
setVideo (props.video)
  }, [props]);

  return (
    <div>
      {video && (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default RandomVideo;