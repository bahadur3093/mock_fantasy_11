export const BASE_URL = "https://api-nba-v1.p.rapidapi.com";
export const LOCAL_BLOG_URL = "http://localhost:5001/api";

export const Urls = {
  team: {
    getAllTeams: `${BASE_URL}/teams`,
    getById: `${BASE_URL}/teams?id=`,
  },
  player: {
    byTeamIdAndSeason: `${BASE_URL}/players`
  },
  blog: {
    users: {
      getAll: `${LOCAL_BLOG_URL}/users`,
      getById: `${LOCAL_BLOG_URL}/users?id=`,
    }
  }
};
