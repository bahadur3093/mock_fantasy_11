"use client";

import { Suspense, useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { rapidBaseUrl } from "../../../../utils/urls";
import { getCachedOrFreshData } from "../../../../utils/cacheApi";
import { Player } from "../../../../models/Player.model";
import PlayerCard from "@/app/components/cards/PlayerCard/PlayerCard";
import Loader from "@/app/components/common/Loader/Loader";
import HeadingTitle from "@/app/components/common/HeadingTitle/HeadingTitle";
import LineSeperator from "@/app/components/common/Seperator/Seperator";
import { useGlobalData } from "@/app/components/common/GlobalContext/GlobalDataContext";
import TeamDetails from "@/app/components/cards/TeamDetails/TeamDetails";
import DropdownSelect from "@/app/components/common/Dropdown/Dropdown";
import { getTeamStatsByYear } from "../../../../services/Teams.service";
import { ITeamStatistics } from "../../../../models/Teams.model";
import { first } from "lodash";
import TeamStatsCard from "@/app/components/cards/TeamStatsCard/TeamStatsCard";

export default function TeamsList() {
  const params = useParams();
  const { currentSelectedTeam } = useGlobalData();

  const [playersList, setPlayersList] = useState<Player[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>(
    (new Date().getFullYear() - 1).toString()
  );
  const [teamStats, setTeamStats] = useState<ITeamStatistics>(
    {} as ITeamStatistics
  );

  const lastTenYears = Array.from(
    { length: 10 },
    (_, i) => new Date().getFullYear() - i
  ).reverse();

  const setSelectedTeamHandler = async (option: string) => {
    setSelectedYear(option);
  };

  useEffect(() => {
    if (params?.slug) {
      const getTeamDataByYear = async () => {
        const year = new Date().getFullYear() - 1;
        try {
          const teamData = await getCachedOrFreshData(
            `teams-${params?.slug}-${year}`,
            `${rapidBaseUrl.getPlayersByYear}?team=${params?.slug}&season=${year}`
          );
          setPlayersList(teamData.response as unknown as Player[]);
        } catch {
          console.log("Error fetching teams");
        }
      };
      getTeamDataByYear();
    }
  }, [params]);

  useEffect(() => {
    const getTeamStats = async (year: string) => {
      const teamId = currentSelectedTeam?.id;
      if (teamId && year) {
        const teamStats = await getTeamStatsByYear(teamId, year);
        if (teamStats?.response.length) {
          setTeamStats(first(teamStats.response) || ({} as ITeamStatistics));
        }
      }
    };

    getTeamStats(selectedYear);
  }, [selectedYear, currentSelectedTeam?.id]);

  return (
    <Suspense fallback={<Loader />}>
      <HeadingTitle size="lg" classes="mb-4">
        Team Details:
      </HeadingTitle>
      {currentSelectedTeam && <TeamDetails teamDetails={currentSelectedTeam} />}
      <LineSeperator classes="my-6" />
      <div className="flex justify-between items-center mb-4">
        <HeadingTitle size="lg">Team Statistics (by year):</HeadingTitle>
        <div className="flex items-center gap-2">
          {currentSelectedTeam && (
            <div>
              <DropdownSelect
                label=""
                options={lastTenYears.map((year) => year.toString())}
                selected={selectedYear}
                onSelect={setSelectedTeamHandler}
              />
            </div>
          )}
        </div>
      </div>
      {selectedYear && (
        <TeamStatsCard
          teamName={currentSelectedTeam?.name || "N/A"}
          stats={teamStats}
          year={selectedYear}
        />
      )}
      <LineSeperator classes="my-6" />
      <HeadingTitle size="lg" classes="mb-4">
        Current Roaster:
      </HeadingTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {playersList.map((player) => (
          <PlayerCard key={`player-${player.id}`} player={player} />
        ))}
      </div>
    </Suspense>
  );
}
