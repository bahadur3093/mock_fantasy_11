import axios from "axios";
import { debounce } from "lodash";
import { useEffect, useMemo, useState } from "react";

import { rapidBaseUrl } from "../../../../../utils/utl";
import { Player } from "../../../../../models/Player.model";
import Link from "next/link";

export default function SearchBar() {
  const [players, setPlayers] = useState<Player[]>([]);

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
      if (result.data.response.length) {
        setPlayers(result.data.response);
      } else {
        setPlayers([]);
      }
    } catch {
      console.log("Error fetching players");
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
    <div className="relative w-full mb-4">
      <input
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        onChange={(e) => {
          debouncedChangeHandler(e.target.value);
        }}
        placeholder="Search player by name"
      />
      {players.length !== 0 && (
        <div className="px-4">
          <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            {players.map((player) => (
              <li
                key={player.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <Link href={`/players/${player.id}`}>
                  {player.firstname} {player.lastname}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
