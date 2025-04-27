import axios from "axios";

import { LOCAL_BLOG_URL } from "./urls";

const apiLocal = axios.create({
  baseURL: LOCAL_BLOG_URL, // 👈 your NBA API base URL
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
  },
});

export default apiLocal;
