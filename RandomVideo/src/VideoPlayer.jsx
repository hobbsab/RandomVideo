import React, { useState, useEffect } from 'react';
import { fetchRandomVideo } from './youtubeService';

const RandomVideo = () => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const getRandomVideo = async () => {
      const randomVideo = await fetchRandomVideo();
      setVideo(randomVideo);
    };

    getRandomVideo();
  }, []);

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


// import React from 'react';

// const VideoPlayer = ({ videoId }) => {
//   console.log (videoId, 'VideoPlayer')
//   const url = `https://www.youtube.com/embed/${videoId}`;

//   return (
//     <div>
//       <iframe
//         title="video-player"
//         width="560"
//         height="315"
//         src={url}
//         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       />
//     </div>
//   );
// };

// export default VideoPlayer;