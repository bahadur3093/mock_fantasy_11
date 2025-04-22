import Image from "next/image";

import { ITeams } from "../../../../../models/Teams.model";
import Link from "next/link";

interface ITeamsCard {
  team: ITeams;
}

export default function TeamsCard({ team }: ITeamsCard) {
  return (
    <Link
      key={`team-${team.id}`}
      href={`/teams/${team.id}`}
      className="border-2 rounded p-2 flex flex-col items-center"
    >
      <div className="h-full mb-4 flex items-center justify-center">
        <Image
          src={team.logo || "/images/placeholder.png"}
          alt={team.name}
          width={100}
          height={100}
          onError={() => "/images/placeholder.png"}
        />
      </div>
      <div className="truncate items-center font-bold text-l">{team.name}</div>
    </Link>
  );
}
