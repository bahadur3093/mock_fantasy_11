export interface ITeams {
  allStar: boolean;
  city: string;
  code: string;
  id: number;
  leagues: {
    sacramento: {
      conference: string;
      division: string;
    };
    standard: {
      conference: string;
      division: string;
    };
    utah: {
      conference: string;
      division: string;
    };
    vegas: {
      conference: string;
      division: string;
    };
  };
  logo: string;
  name: string;
  nickname: string;
  nbaFranchise: boolean;
}

export interface ITeamStatistics {
  games: number;
  fastBreakPoints: number;
  pointsInPaint: number;
  biggestLead: number;
  secondChancePoints: number;
  pointsOffTurnovers: number;
  longestRun: number;
  points: number;
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
  plusMinus: number;
}
