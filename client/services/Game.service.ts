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
