"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { rapidBaseUrl } from "../../../../utils/urls";
import { getCachedOrFreshData } from "../../../../utils/cacheApi";
import { Player } from "../../../../models/Player.model";
import PlayerDetailsCard from "@/app/components/cards/PlayerDetailsCard/PlayerDetailsCard";
import Loader from "@/app/components/common/Loader/Loader";

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
          setPlayerDetails(filteredData || null);
        } catch (error) {
          console.error("Error fetching player details:", error);
        }
      };

      getPlayerDetails();
    }
  }, [playerId]);

  if (!playerDetails) {
    return (
      <Loader />
    );
  }

  return <PlayerDetailsCard playerDetails={playerDetails} />;
}
