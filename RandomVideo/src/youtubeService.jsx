import axios from 'axios';

const API_KEY = 'AIzaSyC3EuAlOcgsSuE1Y12GbjNks_X4XzMCMoo';
const API_URL = 'https://www.googleapis.com/youtube/v3/search';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [randomVideo, setRandomVideo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch videos based on the user's search query
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          q: searchQuery,
          type: 'video',
          part: 'snippet',
          maxResults: 50, // Maximum number of results
        },
      });

      // Select a random video from the search results
      const randomIndex = Math.floor(Math.random() * response.data.items.length);
    const randomVideoId = response.data.items[randomIndex].id.videoId;
    setRandomVideo(`https://www.youtube.com/watch?v=${randomVideoId}`);
  } catch (error) {
    console.error('Error fetching and selecting random video:', error);
  }
};
}

export const fetchRandomVideo = async (searchTerm) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        key: API_KEY,
        part: 'snippet',
        q: searchTerm,
        type: 'video',
        videoEmbeddable: true,
        maxResults: 1,
        order: 'relevance',
      },
    });

    const randomVideo = response.data.items[0];
    console.log(response)
    return randomVideo;
  } catch (error) {
    console.error('Error fetching random video:', error);
    return null;
  }
};