"use client";

import { useEffect, useState } from "react";

import { getCachedOrFreshData } from "../../../utils/cacheApi";
import { rapidBaseUrl } from "../../../utils/urls";
import { IGame } from "../../../models/Game.model";
import GameCard from "../components/cards/GameCard/GameCard";

export default function GamesPage() {
  const [gamesData, setGamesData] = useState<IGame[]>([]);

  useEffect(() => {
    const getGameByDate = async () => {
      try {
        const date = new Date();
        const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
          .toString()
          .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
        const result = await getCachedOrFreshData(
          "game-details",
          `${rapidBaseUrl.getGames.byDate}${formattedDate}`
        );
        setGamesData(result?.response || []);
      } catch (error) {
        console.error("Error fetching game details:", error);
      }
    };

    getGameByDate();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
        Games
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {gamesData.map((game) => (
          <GameCard key={`game-${game.id}`} game={game} showScorecard />
        ))}
      </div>
    </div>
  );
}
