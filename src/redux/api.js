import axios from "axios";

export const loadPostApi = async () => {
   return  await axios.get(`https://jsonplaceholder.typicode.com/users`)
}