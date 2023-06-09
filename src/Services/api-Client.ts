import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7ed9b0e7c53242c4ae70d77f4634b3ca",
  },
});
