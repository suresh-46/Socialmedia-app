import axios from "axios";

const API = axios.create({ baseURL: 'https://social-media-b8pd.onrender.com' });

export const userChats = (id) =>API.get(`/chat/${id}`)
