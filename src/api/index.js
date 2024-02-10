import axios from "axios";

const myAxios = axios.create({
      baseURL: "https://dummyjson.com",
});

export default myAxios;