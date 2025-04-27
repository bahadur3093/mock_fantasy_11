import apiLocal from "../../utils/localAxiosInstance";
import { Urls } from "../../utils/urls";

export const fetchAllUsers = async (): Promise<unknown[]> => {
  const result = await apiLocal.get(`${Urls.blog.users.getAll}`);

  return result.data;
};
