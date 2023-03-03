import axios from 'axios';

const fetchImages = async(searchTerm) => {
    try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
            query: searchTerm,
            client_id: 'jycwRkoT8-ql8SFDLvI3fDcGj7-3mqZtvFC7rjl6Ow8'
        }
      });
      return response.data.results;
    } catch(e) {
        console.log(e);
    }
}

export default fetchImages;