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
