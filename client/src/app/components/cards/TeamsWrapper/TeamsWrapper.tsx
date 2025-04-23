import { ITeams } from "../../../../../models/Teams.model";
import LineSeperator from "../../common/Seperator/Seperator";
import TeamsCategory from "./TeamCategory";

interface TeamWrapperProps {
  teams: ITeams[];
}

export default function TeamWrapper({ teams }: TeamWrapperProps) {
  const nbaTeams = teams.filter((team) => team.nbaFranchise && !team.allStar);
  const otherTeams = teams.filter((team) => !team.nbaFranchise);

  return (
    <>
      <TeamsCategory title="NBA teams" teams={nbaTeams} />
      <LineSeperator />
      <TeamsCategory title="Other teams" teams={otherTeams} />
    </>
  );
}
