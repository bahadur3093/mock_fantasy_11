export interface Player {
  affiliation: string;
  birth: { date: string; country: string };
  college: string;
  firstname: string;
  height: { feets: string; inches: string; meters: string };
  id: number;
  lastname: string;
  leagues: {
    standard: {
      active: boolean;
      jersey: number;
      pos: string;
    };
  };
  nba: { start: number; pro: number };
  weight: {
    kilograms: string;
    pounds: string;
  };
}

export interface IPlayer {
  id: number;
  firstname: string;
  lastname: string;
}

export interface ITeam {
  id: number;
  name: string;
  nickname: string;
  code: string;
  logo: string;
}

export interface IGame {
  id: number;
}

export interface IPlayerStats {
  player: Player;
  team: ITeam;
  game: IGame;
  points: number;
  pos: string;
  min: string;
  fgm: number;
  fga: number;
  fgp: string;
  ftm: number;
  fta: number;
  ftp: string;
  tpm: number;
  tpa: number;
  tpp: string;
  offReb: number;
  defReb: number;
  totReb: number;
  assists: number;
  pFouls: number;
  steals: number;
  turnovers: number;
  blocks: number;
  plusMinus: string;
  comment: string | null;
}
