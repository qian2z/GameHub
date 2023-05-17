import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "63b35dc062d849ee9523daae3248e780",
  },
});
