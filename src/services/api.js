//URL BASE ->  https://api.themoviedb.org/3
//URL DA API ->  /movie/now_playing?api_key=4a4e6379e037a1b036d1ff4221205667&language=pt-BR

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
