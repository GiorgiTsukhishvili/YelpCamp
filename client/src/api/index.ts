import axios from "axios";
import { NewCampGround } from "./newCampgroundInterface";

const url = "http://localhost:5000/campgrounds";

export const fetchCamps = () => axios.get(url);
export const fetchSingleCamp = (id: string) => axios.get(`${url}/${id}`);
export const createCamp = (newPost: NewCampGround) => axios.post(url, newPost);
