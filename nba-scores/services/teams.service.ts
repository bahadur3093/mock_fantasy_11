import { ITeam } from "../models/Teams.model";
import { Urls } from "../utils/urls";
import api from "../utils/axiosInstance";
import { IPlayer } from "../models/Player.model";

export const fetchAllTeams = async (): Promise<ITeam[]> => {
  const result = await api.get(`${Urls.team.getAllTeams}`);

  return result.data.response || ([] as ITeam[]);
};

export const fetchTeamDetailsById = async (id: number): Promise<ITeam[]> => {
  const result = await api.get(`${Urls.team.getById}${id}`);

  return result.data.response;
};

export const fetchPlayersByTeamIdAndSeason = async (
  id: number,
  season: number
): Promise<IPlayer[]> => {
  const result = await api.get(
    `${Urls.player.byTeamIdAndSeason}?team=${id}&season=${season}`
  );

  return result.data.response;
};
