"use client";

import { debounce } from "lodash";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Link from "next/link";

import { rapidBaseUrl } from "../../../../../utils/urls";
import { Player } from "../../../../../models/Player.model";

export default function SearchBar() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getPlayersByName = async (value: string) => {
    try {
      const result = await axios.get(
        `${rapidBaseUrl.searchPlayersDetails}${value}`,
        {
          headers: {
            "x-rapidapi-key":
              "90845d6062msh1bd8c7755c03cb9p134c77jsn26ca06c37106",
            "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
          },
        }
      );
      if (result?.data?.response.length) {
        setPlayers(result?.data?.response);
      } else {
        setPlayers([]);
      }
      setLoading(false);
    } catch {
      console.log("Error fetching players");
      setLoading(false);
    }
  };

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

  return (
    <div className="relative w-full">
      <input
        className="opacity-50 cursor-not-allowed w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        onChange={(e) => {
          debouncedChangeHandler(e.target.value);
        }}
        placeholder="Search player by name...."
      />
      {!loading && players.length !== 0 && (
        <div className="px-4">
          <div className="absolute flex flex-col left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            {players.map((player) => (
              <Link
                href={`/players/${player.id}`}
                key={player.id}
                className="px-4 w-full py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setLoading(true)}
              >
                {player.firstname} {player.lastname}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
