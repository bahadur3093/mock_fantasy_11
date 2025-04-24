import { Leagues } from "../constants/Game.constant";
import { LeagueStandingsData } from "../models/LeagueStats.model";
import { ISeasonData } from "../models/Season.model";
import { getCachedOrFreshData } from "../utils/cacheApi";
import { rapidBaseUrl } from "../utils/urls";

export const fetchSeasonDataByYear = async (
  year: string
): Promise<ISeasonData[]> => {
  const result = await getCachedOrFreshData(
    `season-data-${year}`,
    `${rapidBaseUrl.getGames.bySeason}${year}`
  );

  return result.response;
};

export const fetchSeasonStandingsByLeague = async (
  year: string,
  league: Leagues
): Promise<LeagueStandingsData[]> => {
  const result = await getCachedOrFreshData(
    `season-data${league}-${year}`,
    `${rapidBaseUrl.standings.byLeagueAndSeason}?league=${league}&season=${year}`
  );

  return result.response;
};
