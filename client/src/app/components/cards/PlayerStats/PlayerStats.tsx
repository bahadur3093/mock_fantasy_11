import { useEffect, useState } from "react";

import { IPlayerStats, Player } from "../../../../../models/Player.model";
import { fetchPlayerStatsByYear } from "../../../../../services/Player.service";
import Loader from "../../common/Loader/Loader";
import AccordionCard from "../../common/Accordion/Accordion";

interface PlayerStatsProps {
  playerId: number;
  playerData: Player;
}

export default function PlayerStats({
  playerId
}: PlayerStatsProps) {
  const [playerStats, setPlayerStats] = useState<IPlayerStats[]>([]);

  useEffect(() => {
    const getPlayerStatsByYear = async (playerId: number) => {
      try {
        const result = await fetchPlayerStatsByYear(playerId, "2023");
        setPlayerStats(result?.response);
      } catch (error) {
        console.error("Error fetching player stats:", error);
      }
    };

    getPlayerStatsByYear(playerId);
  }, [playerId]);

  if (!playerStats.length) {
    return (
      <div className="relative h-36">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {playerStats.map((stat) => (
        <AccordionCard title={stat.game.id} key={`player-stats-${stat.game.id}-${playerId}`}>
          <div className="rounded-lg shadow-md p-6 bg-white">
            <div className="pb-4 mb-4 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900">
                {stat.player.firstname} {stat.player.lastname}
              </h2>
              <p className="text-sm text-gray-500">
                Team:{" "}
                <span className="font-medium text-blue-500">
                  {stat.team.name}
                </span>{" "}
                ({stat.team.nickname})
              </p>
              <p className="text-sm text-gray-500">Position: {stat.pos}</p>
              <p className="text-sm text-gray-500">Game ID: {stat.game.id}</p>
            </div>

            <div className="pb-4 mb-4 border-b border-gray-200">
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                Performance
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <p>
                  Points:{" "}
                  <span className="font-semibold text-green-500">
                    {stat.points}
                  </span>
                </p>
                <p>
                  Minutes:{" "}
                  <span className="font-semibold text-green-500">
                    {stat.min}
                  </span>
                </p>
                <p>
                  Field Goals:{" "}
                  <span className="font-semibold text-blue-500">
                    {stat.fgm}/{stat.fga} ({stat.fgp}%)
                  </span>
                </p>
                <p>
                  Free Throws:{" "}
                  <span className="font-semibold text-blue-500">
                    {stat.ftm}/{stat.fta} ({stat.ftp}%)
                  </span>
                </p>
                <p>
                  3-Point Shots:{" "}
                  <span className="font-semibold text-blue-500">
                    {stat.tpm}/{stat.tpa} ({stat.tpp}%)
                  </span>
                </p>
              </div>
            </div>

            <div className="pb-4 mb-4 border-b border-gray-200">
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                Rebounds & Assists
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <p>
                  Offensive Rebounds:{" "}
                  <span className="font-semibold text-purple-500">
                    {stat.offReb}
                  </span>
                </p>
                <p>
                  Defensive Rebounds:{" "}
                  <span className="font-semibold text-purple-500">
                    {stat.defReb}
                  </span>
                </p>
                <p>
                  Total Rebounds:{" "}
                  <span className="font-semibold text-purple-500">
                    {stat.totReb}
                  </span>
                </p>
                <p>
                  Assists:{" "}
                  <span className="font-semibold text-purple-500">
                    {stat.assists}
                  </span>
                </p>
              </div>
            </div>

            <div className="pb-4 mb-4 border-b border-gray-200">
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                Miscellaneous
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <p>
                  Personal Fouls:{" "}
                  <span className="font-semibold text-red-500">
                    {stat.pFouls}
                  </span>
                </p>
                <p>
                  Steals:{" "}
                  <span className="font-semibold text-green-500">
                    {stat.steals}
                  </span>
                </p>
                <p>
                  Turnovers:{" "}
                  <span className="font-semibold text-red-500">
                    {stat.turnovers}
                  </span>
                </p>
                <p>
                  Blocks:{" "}
                  <span className="font-semibold text-green-500">
                    {stat.blocks}
                  </span>
                </p>
                <p>
                  Plus/Minus:{" "}
                  <span className="font-semibold text-blue-500">
                    {stat.plusMinus}
                  </span>
                </p>
                {stat.comment && (
                  <p>
                    Comment:{" "}
                    <span className="font-medium text-gray-700">
                      {stat.comment}
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </AccordionCard>
      ))}
    </div>
  );
}
