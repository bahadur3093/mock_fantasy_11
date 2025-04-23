import Image from "next/image";

import { Player } from "../../../../../models/Player.model";
import { useGlobalData } from "../../common/GlobalContext/GlobalDataContext";
import HeadingTitle from "../../common/HeadingTitle/HeadingTitle";
import PlayerStats from "../PlayerStats/PlayerStats";
interface PlayerDetailsCardProps {
  playerDetails: Player;
}

export default function PlayerDetailsCard({
  playerDetails,
}: PlayerDetailsCardProps) {
  const { currentSelectedPlayer } = useGlobalData();
  console.log("currentSelectedPlayer", currentSelectedPlayer);

  return (
    <div className="mx-auto">
      <HeadingTitle
        size="lg"
        classes="font-extrabold text-gray-800 mb-2 tracking-tight"
      >
        Player Profile
      </HeadingTitle>

      <div className="bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center p-4">
          <Image
            src={"/images/player-placeholder.jpg"}
            alt={playerDetails.firstname}
            width={500}
            height={500}
            onError={() => "/images/player-placeholder.png"}
            className="object-cover w-full h-full rounded-lg shadow-md"
          />
        </div>

        <div className="col-span-2 p-6 space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {playerDetails.firstname} {playerDetails.lastname}
            </h2>
            <p className="text-gray-600 text-sm">
              #{playerDetails.leagues.standard?.jersey} •{" "}
              {playerDetails.leagues.standard?.pos} • Team
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p>
                <span className="font-medium">Height:</span>{" "}
                {playerDetails.height.feets}&apos;
                {playerDetails.height.inches}&quot; /{" "}
                {playerDetails.height.meters} m{" "}
              </p>
              <p>
                <span className="font-medium">Weight:</span>{" "}
                {playerDetails.weight.pounds || "-"} lbs /{" "}
                {playerDetails.weight.kilograms || "-"} kg
              </p>
            </div>
            <div>
              <p>
                <span className="font-medium">Born:</span>{" "}
                {playerDetails.birth.country}, {playerDetails.birth.date}
              </p>
              <p>
                <span className="font-medium">College:</span>{" "}
                {playerDetails.college || "N/A"}
              </p>
            </div>
          </div>

          <div className="text-sm text-gray-700">
            <p>
              <span className="font-medium">Affiliation:</span>{" "}
              {playerDetails.affiliation || "N/A"}
            </p>
            <p>
              <span className="font-medium">NBA Start:</span>{" "}
              {playerDetails.nba.start || "N/A"}
            </p>
            <p>
              <span className="font-medium">Pro Years:</span> 7
            </p>
            <p>
              <span className="font-medium">Status:</span>{" "}
              <span
                className={`${
                  playerDetails.leagues.standard.active
                    ? "text-green-600"
                    : "text-red-600"
                } font-semibold`}
              >
                {playerDetails.leagues.standard.active ? "Active" : "In-active"}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Player Stats section */}
      <HeadingTitle
        size="lg"
        classes="mt-6 font-extrabold text-gray-800 mb-2 tracking-tight"
      >
        Player Stats
      </HeadingTitle>
      {currentSelectedPlayer && (
        <PlayerStats
          playerId={currentSelectedPlayer?.id}
          playerData={currentSelectedPlayer}
        />
      )}
    </div>
  );
}
