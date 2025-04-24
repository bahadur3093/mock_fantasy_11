interface Team {
  id: number;
  name: string;
  nickname: string;
  code: string;
  logo: string;
}

interface Conference {
  name: string;
  rank: number;
  win: number;
  loss: number;
}

interface Division {
  name: string;
  rank: number;
  win: number;
  loss: number;
  gamesBehind: string;
}

interface WinLoss {
  home: number;
  away: number;
  total: number;
  percentage: string;
  lastTen: number;
}

export interface LeagueStandingsData {
  league: string;
  season: number;
  team: Team;
  conference: Conference;
  division: Division;
  win: WinLoss;
  loss: WinLoss;
  gamesBehind: string;
  streak: number;
  winStreak: boolean;
  tieBreakerPoints: null | number;
}
