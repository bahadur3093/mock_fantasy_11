import { ITeamStatistics } from "../models/Teams.model";
import { getCachedOrFreshData } from "../utils/cacheApi";
import { rapidBaseUrl } from "../utils/urls";

export const getTeamStatsByYear = async (
  teamId: number,
  year: string
): Promise<{ response: ITeamStatistics[] }> => {
  return await getCachedOrFreshData(
    `teams-stats-${teamId}-${year}`,
    `${rapidBaseUrl.getTeamStats}?id=${teamId}&season=${year}`
  );
};
