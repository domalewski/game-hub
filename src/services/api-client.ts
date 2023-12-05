import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '60fe50165f8a42ae99d252879c3bc2c8'
  }
})