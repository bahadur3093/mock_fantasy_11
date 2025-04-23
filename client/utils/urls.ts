const RAPID_API_BASE_URL = "https://api-nba-v1.p.rapidapi.com";

export const rapidApiHeaders = {
    "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.X_RAPIDAPI_HOST,
};

export const rapidBaseUrl = {
    searchPlayersDetails: `${RAPID_API_BASE_URL}/players?search=`,
    getPlayersDetails: `${RAPID_API_BASE_URL}/players?id=`,
    searchTeams: `${RAPID_API_BASE_URL}/teams`,
    getPlayersByYear: `${RAPID_API_BASE_URL}/players`,
    getTeamStats: `${RAPID_API_BASE_URL}/teams/statistics`,
    getPlayerStats: `${RAPID_API_BASE_URL}/players/statistics`,
}
