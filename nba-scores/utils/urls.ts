export const BASE_URL = "https://api-nba-v1.p.rapidapi.com";
export const LOCAL_BLOG_URL = "http://localhost:5001/api";
export const DEPLOYED_BLOG_URL = "https://mock-fantasy-11-server-git-fe-44b64d-bahadurs-projects-e1c84fde.vercel.app/api";


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
      getAll: `${DEPLOYED_BLOG_URL}/users`,
      getById: `${DEPLOYED_BLOG_URL}/users?id=`,
    }
  }
};
