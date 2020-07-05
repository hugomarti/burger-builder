import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-b4ff1.firebaseio.com/",
});

export default instance;
