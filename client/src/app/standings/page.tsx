"use client";

import { useEffect, useState } from "react";
import { fetchSeasonStandingsByLeague } from "../../../services/Game.service";
import { Leagues } from "../../../constants/Game.constant";
import DropdownSelect from "../components/common/Dropdown/Dropdown";
import { LeagueStandingsData } from "../../../models/LeagueStats.model";
import Image from "next/image";

export default function LeagueStandings() {
  const [leagueStanding, setLeagueStandings] = useState<LeagueStandingsData[]>(
    []
  );
  const [defaultLeague, setDefaultLeague] = useState<Leagues>(Leagues.standard);
  const [selectedYear, setSelectedYear] = useState<string>(
    (new Date().getFullYear() - 1).toString()
  );

  const lastTenYears = Array.from(
    { length: 10 },
    (_, i) => new Date().getFullYear() - i
  ).reverse();

  const setSelectedTeamHandler = (option: string) => {
    setSelectedYear(option);
  };

  useEffect(() => {
    const getLeagueStanding = async () => {
      try {
        const result = await fetchSeasonStandingsByLeague(
          selectedYear,
          defaultLeague
        );
        setLeagueStandings(result);
      } catch (error) {
        console.error(
          "An error occurred while fetching league standings:",
          error
        );
      }
    };

    getLeagueStanding();
  }, [defaultLeague]);

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          {Object.values(Leagues).map((league) => (
            <button
              key={league}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                defaultLeague === league
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } ${
                league !== Leagues.standard
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={() => setDefaultLeague(league)}
              disabled={league !== Leagues.standard}
            >
              {league.toUpperCase()}
            </button>
          ))}
        </div>
        <div>
          <DropdownSelect
            label=""
            options={lastTenYears.map((year) => year.toString())}
            selected={selectedYear}
            onSelect={setSelectedTeamHandler}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-full bg-white overflow-hidden border border-gray-200 rounded-lg shadow-md">
          <div className="grid grid-cols-6 gap-4 border-b py-4 px-4 bg-gray-100">
            <div className="font-semibold text-gray-800">Name</div>
            <div className="font-medium text-gray-600 text-sm">Wins</div>
            <div className="font-medium text-gray-600 text-sm">Losses</div>
            <div className="font-medium text-gray-600 text-sm">Conference</div>
            <div className="font-medium text-gray-600 text-sm">
              Games Behind
            </div>
          </div>
          {leagueStanding.map((team) => (
            <div
              key={`team-standing-${team.team.id}`}
              className="grid grid-cols-6 gap-4 border-b py-4 px-4 bg-white hover:bg-gray-50 transition duration-200"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={team.team.logo}
                  alt={team.team.name}
                  width={100}
                  height={100}
                  className="w-10 h-10 object-contain"
                />
                <span className="font-semibold text-gray-800">
                  {team.team.name}
                </span>
              </div>
              <div className="text-gray-600 text-sm font-medium">
                <span className="text-gray-900">{team.win.total}</span>
              </div>
              <div className="text-gray-600 text-sm font-medium">
                <span className="text-gray-900">{team.loss.total}</span>
              </div>
              <div className="text-gray-600 text-sm font-medium">
                <span className="text-gray-900">{team.conference.rank}</span>
              </div>
              <div className="text-gray-600 text-sm font-medium">
                <span className="text-gray-900">{team.gamesBehind}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
