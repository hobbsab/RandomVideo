
import axios from 'axios';

const API_KEY = 'AIzaSyC3EuAlOcgsSuE1Y12GbjNks_X4XzMCMoo';
const API_URL = 'https://www.googleapis.com/youtube/v3/search';

export const fetchRandomVideo = async () => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        key: API_KEY,
        part: 'snippet',
        q: 'food',
        type: 'video',
        videoEmbeddable: true,
        maxResults: 1,
        order: 'relevance',
      },
    });

    const randomVideo = response.data.items[0];
    console.log (response)
    return randomVideo;
  } catch (error) {
    console.error('Error fetching random video:', error);
    return null;
  }
};




// import axios from 'axios';

// //random search
// const searchTerms = ["music%20video", "coding%20tutorial"];
// const getSearchTerm = () => searchTerms[Math.floor(Math.random() * (searchTerms.length - 1))];
// //API KEY
// const API_KEY = "AIzaSyC3EuAlOcgsSuE1Y12GbjNks_X4XzMCMoo";
// //YouTube API search url
// const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${getSearchTerm()}&key=${}`;

// export const fetchRandomVideo = async () => {
//   try {
//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(data => {
//         document.querySelector(".ytvideo").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
//       });

//     console.log(response)
//     const videoId = response.data.items[0].id.videoId;
//     console.log(videoId)
//     return videoId;
//   } catch (error) {
//     console.error('Error fetching video:', error);
//     return null;
//   }
// };