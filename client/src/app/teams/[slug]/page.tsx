"use client";

import { Suspense, useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { rapidBaseUrl } from "../../../../utils/utl";
import { getCachedOrFreshData } from "../../../../utils/cacheApi";
import { Player } from "../../../../models/Player.model";
import PlayerCard from "@/app/components/cards/PlayerCard/PlayerCard";

export default function TeamDetails() {
  const params = useParams();
  const [playersList, setPlayersList] = useState<Player[]>([]);

  useEffect(() => {
    if (params?.slug) {
      const getTeamDataByYear = async () => {
        const year = new Date().getFullYear() - 1;
        try {
          const teamData = await getCachedOrFreshData(
            `teams-${params?.slug}-${year}`,
            `${rapidBaseUrl.getPlayersByYear}?team=${params?.slug}&season=${year}`
          );
          setPlayersList(teamData.response as unknown as Player[]);
        } catch {
          console.log("Error fetching teams");
        }
      };
      getTeamDataByYear();
    }
  }, [params]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="grid grid-cols-4 gap-4 mb-4">
        {playersList.map((player) => (
          <PlayerCard key={`player-${player.id}`} player={player} />
        ))}
      </div>
    </Suspense>
  );
}
