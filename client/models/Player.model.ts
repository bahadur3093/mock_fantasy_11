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
