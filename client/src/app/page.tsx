"use client";

import axios from "axios";
import { debounce } from "lodash";
import { useEffect, useMemo, useState } from "react";

import { rapidBaseUrl } from "../../utils/utl";
import { Player } from "../../models/Player.model";

export default function Home() {
  const [players, setPlayers] = useState<Player[]>([]);

  const debouncedChangeHandler = useMemo(
    () =>
      debounce((value: string) => {
        if (value.length) {
          getPlayersByName(value);
        }
      }, 500),
    []
  );

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [debouncedChangeHandler]);

  const getPlayersByName = async (value: string) => {
    try {
      const result = await axios.get(`${rapidBaseUrl.searchPlayersDetails}${value}`, {
        headers: {
          "x-rapidapi-key":
            "90845d6062msh1bd8c7755c03cb9p134c77jsn26ca06c37106",
          "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        },
      });
      if (result.data.response.length) {
        setPlayers(result.data.response);
      } else{
        setPlayers([]);
      }
    } catch {
      console.log("Error fetching players");
    }
  };

  return (
    <main className="p-5">
      <h1>Home Page</h1>
      <input
        className="border-2 rounded"
        type="text"
        onChange={(e) => {
          debouncedChangeHandler(e.target.value);
        }}
      />
      <div>
        {players.map((player) => (
          <div key={player.id} className="border-2 rounded p-2 my-2">
            <div>{player.firstname} {player.lastname}</div>
            {player.affiliation && <div>{player.affiliation}</div>}
            <div>{player.birth.date} - {player.birth.country}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
