export interface ISeasonData {
  id: number;
  league: string;
  season: number;
  date: {
    start: string;
    end: string;
    duration: string;
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
    country: string;
  };
  teams: {
    visitors: Team;
    home: Team;
  };
  scores: {
    visitors: Score;
    home: Score;
  };
  officials: string[];
  timesTied: number;
  leadChanges: number;
  nugget: string | null;
}

interface Team {
  id: number;
  name: string;
  nickname: string;
  code: string;
  logo: string;
}

interface Score {
  win: number;
  loss: number;
  series: {
    win: number;
    loss: number;
  };
  linescore: string[];
  points: number;
}
