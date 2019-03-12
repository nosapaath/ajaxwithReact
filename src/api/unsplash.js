import axios from 'axios';

export default axios.create({
  baseURL : 'https://api.unsplash.com/',
  headers : {
    Authorization: 
      'Client-ID 7c7524bd3015e958f355a46fb0ce79167f900038d97d5af2c8e3eee43bb9b589'
  }
});