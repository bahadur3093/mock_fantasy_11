"use client";

import { useEffect, useState } from "react";

import { getCachedPlayersData } from "../../../utils/cacheApi";
import { Player } from "../../../models/Player.model";
import PlayerCard from "../components/cards/PlayerCard/PlayerCard";
import HeadingTitle from "../components/common/HeadingTitle/HeadingTitle";

export default function PlayersCard() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const getAllPlayersFromCache = async () => {
      try {
        const result = await getCachedPlayersData();
        setPlayers(result);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    getAllPlayersFromCache();
  }, []);

  return (
    <>
      <HeadingTitle size="xl" classes="mb-4">
        Players:
      </HeadingTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-4">
        {players.map((player) => (
          <PlayerCard key={`player-details-${player.id}`} player={player} />
        ))}
      </div>
    </>
  );
}
