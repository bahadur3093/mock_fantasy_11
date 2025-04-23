import Image from "next/image";
import Link from "next/link";
import { Player } from "../../../../../models/Player.model";
import { useGlobalData } from "../../common/GlobalContext/GlobalDataContext";

interface PlayerCardProps {
  player: Player;
}

export default function PlayerCard({ player }: PlayerCardProps) {
  const { setCurrentSelectedPlayer } = useGlobalData();

  return (
    <Link
      href={`/players/${player.id}`}
      onClick={() => setCurrentSelectedPlayer(player)}
    >
      <div className="max-w-xs h-full w-full bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="h-48 bg-white flex items-center justify-center">
          <Image
            src={"/images/player-placeholder.jpg"}
            alt={player.firstname}
            width={500}
            height={500}
            onError={() => "/images/player-placeholder.png"}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">
            {player.firstname} {player.lastname}
          </h2>
          <p className="text-sm text-gray-500 mb-2">
            #{player.leagues.standard?.jersey} • {player.leagues.standard?.pos}{" "}
            • Team
          </p>

          <div className="text-sm text-gray-700 mb-2">
            <p>
              <span className="font-medium">Height:</span> {player.height.feets}
              &apos;{player.height.inches}&quot; / {player.height.meters} m
            </p>
            <p>
              <span className="font-medium">Weight:</span>{" "}
              {player.weight.pounds || "-"} lbs /{" "}
              {player.weight.kilograms || "-"} kg
            </p>
          </div>

          <div className="text-xs text-gray-500">
            <p>
              <span className="font-medium">Born:</span> {player.birth.country},{" "}
              {player.birth.date}
            </p>
            <p>
              <span className="font-medium">College:</span>{" "}
              {player.college || "N/A"}
            </p>
            <p>
              <span className="font-medium">NBA Start:</span>{" "}
              {player.nba.start || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
