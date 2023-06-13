import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "69dbf41f97ff468aabbb4f93ec534679",
  },
});
