import axios from "axios";

let api_key = import.meta.env.VITE_API_KEY;

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: api_key,
  }
});