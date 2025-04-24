"use client";

import { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

import { fetchSeasonDataByYear } from "../../../../../services/Game.service";
import { ISeasonData } from "../../../../../models/Season.model";
import GameCard from "../GameCard/GameCard";
import Loader from "../../common/Loader/Loader";
import HeadingTitle from "../../common/HeadingTitle/HeadingTitle";
import DropdownSelect from "../../common/Dropdown/Dropdown";

interface SeasonDetailsProps {
  year: string;
}

export default function SeasonDetails({ year }: SeasonDetailsProps) {
  const [seasonData, setSeasonData] = useState<ISeasonData[]>([]);
  const [filteredGames, setFilteredGames] = useState<ISeasonData[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const getAllOptionsByTeam = (): string[] => {
    if (!seasonData.length) return [];

    const allTeams = new Set<string>();
    seasonData.forEach((game) => {
      allTeams.add(game.teams.home.nickname);
      allTeams.add(game.teams.visitors.nickname);
    });

    return Array.from(allTeams);
  };

  useEffect(() => {
    const getSeasonDataByYear = async () => {
      setLoading(true);
      try {
        const result = await fetchSeasonDataByYear(year);
        setSeasonData(result || []);
        setFilteredGames(result || []);
        setLoading(false);
      } catch (error) {
        console.log("Unable to get season data", error);
        setLoading(false);
      }
    };

    getSeasonDataByYear();
  }, [year]);

  const setSelectedTeamHandler = (team: string) => {
    setLoading(true);
    setSelectedTeam(team);
  };

  useEffect(() => {
    if (selectedTeam) {
      const gamesByTeam = seasonData.filter(
        (game) =>
          game.teams.home.nickname.toLowerCase() ===
            selectedTeam.toLowerCase() ||
          game.teams.visitors.nickname.toLowerCase() ===
            selectedTeam.toLowerCase()
      );

      setFilteredGames(gamesByTeam);
      setLoading(false);
    }
  }, [selectedTeam]);

  if (loading) {
    return (
      <div className="h-96 relative">
        <Loader />
      </div>
    );
  }

  return (
    <>
      {filteredGames.length !== 0 && (
        <div className="grid grid-cols-2 mb-3">
          <HeadingTitle size="md">
            Filters({filteredGames.length}):
          </HeadingTitle>
          <div className="flex justify-end">
            <DropdownSelect
              label=""
              options={getAllOptionsByTeam()}
              selected={selectedTeam}
              onSelect={setSelectedTeamHandler}
            />
            {selectedTeam && (
              <button
                onClick={() => {
                  setSelectedTeam("");
                  setFilteredGames(seasonData);
                }}
                className="cursor-pointer flex items-center px-3 py-1 ml-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      )}
      {filteredGames.length ? (
        <div className="space-y-6">
          {Object.entries(
            filteredGames.reduce((acc, game) => {
              const gameDate = new Date(game.date.start).toLocaleDateString();
              if (!acc[gameDate]) {
                acc[gameDate] = [];
              }
              acc[gameDate].push(game);
              return acc;
            }, {} as Record<string, ISeasonData[]>)
          ).map(([date, games]) => (
            <div
              key={`date-group-${date}`}
              className="bg-white shadow-md rounded-lg p-4 mb-6"
            >
              <HeadingTitle
                size="md"
                classes="flex items-center border-b-2 border-gray-200 pb-2 mb-4 text-gray-700 uppercase tracking-wide"
              >
                <FaCalendarAlt className="mr-3" /> {date}
              </HeadingTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {games.map((game) => (
                  <GameCard key={`season-game-${game.id}`} game={game} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full text-center text-lg font-semibold text-gray-700 bg-yellow-100 p-4 rounded-md shadow-md">
          No games found for year {year}!!
        </div>
      )}
    </>
  );
}
