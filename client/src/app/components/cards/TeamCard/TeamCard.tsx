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
      className="flex flex-col items-center justify-center"
    >
      <div className="w-full h-full max-w-xs mx-auto bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center w-full h-32">
          <Image
            src={team.logo || "/images/placeholder.png"}
            alt={team.name}
            width={100}
            height={100}
            onError={() => "/images/placeholder.png"}
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">{team.nickname}</h2>
          <p className="text-gray-600 text-sm">
          {team.name || "No nickname available"}
          </p>
        </div>
      </div>
    </Link>
  );
}
