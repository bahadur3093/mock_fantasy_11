import { RootState } from "..";

export const getSelectedTeamData = () => (state: RootState) => state.team.selectedTeam;