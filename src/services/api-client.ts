import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: "923a6ed4186a4e75b36e05f4a21eb9a2"
  }
});
