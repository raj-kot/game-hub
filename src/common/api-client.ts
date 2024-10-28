import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6bf8b96c78964147831599ba0917d01e",
  },
});
