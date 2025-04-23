"use client";

import { useEffect, useState } from "react";

import { rapidBaseUrl } from "../../../../utils/utl";
import { getCachedOrFreshData } from "../../../../utils/cacheApi";
import { Player } from "../../../../models/Player.model";
import PlayerDetailsCard from "@/app/components/cards/PlayerDetailsCard/PlayerDetailsCard";
import { useParams } from "next/navigation";


export default function PlayersDetails() {
  const { playerId } = useParams();
  const [playerDetails, setPlayerDetails] = useState<Player | null>(null);

  useEffect(() => {
    if (playerId) {
      const getPlayerDetails = async () => {
        try {
          const result = await getCachedOrFreshData(
            `player-details-${playerId}`,
            `${rapidBaseUrl.getPlayersDetails}${playerId}`
          );
          const filteredData =
            result?.response.length &&
            (result?.response as unknown as Player[]).find(
              (player) => player.id.toString() === playerId
            );
          console.log("Player details", filteredData);
          setPlayerDetails(filteredData || null);
        } catch (error) {
          console.error("Error fetching player details:", error);
        }
      };

      getPlayerDetails();
    }
  }, []);

  if (!playerDetails) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return <PlayerDetailsCard playerDetails={playerDetails} />;
}
