import { Player } from "./Player.model";
import { ITeams } from "./Teams.model";

export interface GlobalDataContextType {
  currentSelectedTeam: ITeams | null;
  setCurrentSelectedTeam: (data: ITeams) => void;
  currentSelectedPlayer: Player | null; 
  setCurrentSelectedPlayer: (data: Player) => void;
}
