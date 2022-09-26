import axios from "axios";
import { Comments, NewCampGround, UpdateData } from "./newCampgroundInterface";

const url = "http://localhost:5000/campgrounds";

export const fetchCamps = () => axios.get(url);
export const fetchSingleCamp = (id: string) => axios.get(`${url}/${id}`);
export const createCamp = (newPost: NewCampGround) => axios.post(url, newPost);
export const patchSingleCamp = (id: string, data: UpdateData) =>
  axios.patch(`${url}/${id}`, data);
export const deleteSingleCamp = (id: string) => axios.delete(`${url}/${id}`);
export const updateComments = (id: string, comments: Comments[]) =>
  axios.patch(`${url}/comments/${id}`, comments);
