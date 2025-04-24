import { IPlayerStats } from "../models/Player.model";
import { getCachedOrFreshData } from "../utils/cacheApi";
import { rapidBaseUrl } from "../utils/urls";

export const fetchPlayerStatsByYear = async (
  playerId: number,
  year: string
): Promise<{ response: IPlayerStats[] }> => {
  return await getCachedOrFreshData(
    `player-stats-${playerId}-${year}`,
    `${rapidBaseUrl.getPlayerStats}?id=${playerId}&season=${year}`
  );
};
