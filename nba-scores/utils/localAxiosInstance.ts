import axios from "axios";

import { LOCAL_BLOG_URL } from "./urls";

const apiLocal = axios.create({
  baseURL: LOCAL_BLOG_URL, // 👈 your NBA API base URL
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default apiLocal;
