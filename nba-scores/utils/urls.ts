export const BASE_URL = "https://api-nba-v1.p.rapidapi.com";

export const Urls = {
  team: {
    getAllTeams: `${BASE_URL}/teams`,
    getById: `${BASE_URL}/teams?id=`,
  },
  player: {
    byTeamIdAndSeason: `${BASE_URL}/players`
  }
};
