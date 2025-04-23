import { ITeams } from "../../../../../models/Teams.model";
import HeadingTitle from "../../common/HeadingTitle/HeadingTitle";
import TeamsCard from "../TeamCard/TeamCard";

interface TeamsCategoryProps {
  title: string;
  teams: ITeams[];
}

export default function TeamsCategory({ title, teams }: TeamsCategoryProps) {
  return (
    <>
      <HeadingTitle size="lg" classes="mb-3">
        {title} ({teams.length})
      </HeadingTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-">
        {teams.map((team) => (
          <TeamsCard key={`team-${team.id}`} team={team} />
        ))}
      </div>
    </>
  );
}
