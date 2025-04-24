export interface IGame {
  id: number;
  league: string;
  season: number;
  date: {
    start: string;
    end: string | null;
    duration: string | null;
  };
  stage: number;
  status: {
    clock: string | null;
    halftime: boolean;
    short: number;
    long: string;
  };
  periods: {
    current: number;
    total: number;
    endOfPeriod: boolean;
  };
  arena: {
    name: string;
    city: string;
    state: string;
    country: string | null;
  };
  teams: IGameTeams;
  scores: IGameScores;
  officials: string[];
  timesTied: number | null;
  leadChanges: number | null;
  nugget: string | null;
}

export interface IGameTeams {
  visitors: Team;
  home: Team;
}

interface Team {
  id: number;
  name: string;
  nickname: string;
  code: string;
  logo: string;
}

export interface IGameScores {
  visitors: IScore;
  home: IScore;
}

export interface IScore {
  win: number;
  loss: number;
  series: {
    win: number;
    loss: number;
  };
  linescore: string[];
  points: number;
}
