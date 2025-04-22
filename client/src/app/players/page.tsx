"use client";

import { useEffect, useState } from "react";

import { getCachedOrFreshData } from "../../../utils/cacheApi";
import { rapidBaseUrl } from "../../../utils/utl";
import { Player } from "../../../models/Player.model";
import { useSearchParams } from "next/navigation";

export default function PlayersCard() {
  const searchParams = useSearchParams();
  const playerId = searchParams.get("playerId");
  const [playerDetails, setPlayerDetails] = useState<Player | null>(null);

  useEffect(() => {
    if (playerId) {
      const getPlayerDetails = async () => {
        try {
          const result = await getCachedOrFreshData(
            `player-details-${playerId}`,
            `${rapidBaseUrl.getPlayersDetails}${playerId}`
          );
          const filteredData = (result.response as unknown as Player[]).find(
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

  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        Name: {playerDetails.firstname} {playerDetails.lastname}
      </div>
      <div>Affiliation: {playerDetails.affiliation}</div>
      <div>College: {playerDetails.college}</div>
      <div>Height: {playerDetails.height.meters}</div>
      <div>Weight: {playerDetails.weight.kilograms}</div>
      <div>Position: {playerDetails.leagues?.standard?.pos}</div>
      <div>Date of Birth: {playerDetails.birth?.date}</div>
    </div>
  );
}
