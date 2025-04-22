"use client";

import { useEffect, useState } from "react";

import { rapidBaseUrl } from "../../../utils/utl";
import { getCachedOrFreshData } from "../../../utils/cacheApi";
import { ITeams } from "../../../models/Teams.model";
import TeamsCard from "../components/cards/TeamCard/TeamCard";
import HeadingTitle from "../components/common/HeadingTitle/HeadingTitle";

export default function Teams() {
  const [teams, setTeams] = useState<ITeams[]>([]);
  const [nbaTeams, setNbaTeams] = useState<ITeams[]>([]);
  const [otherTeams, setOtherTeams] = useState<ITeams[]>([]);

  useEffect(() => {
    const getAllTeams = async () => {
      try {
        const teams = await getCachedOrFreshData(
          "teams",
          rapidBaseUrl.searchTeams
        );
        setTeams(teams.response);
        const nbaTeams = (teams.response as unknown as ITeams[]).filter(
          (team) => team.nbaFranchise && !team.allStar
        );
        const otherTeams = (teams.response as unknown as ITeams[]).filter(
          (team) => !team.nbaFranchise
        );
        console.log("NBA teams", teams);
        setNbaTeams(nbaTeams);
        setOtherTeams(otherTeams);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    getAllTeams();
  }, []);

  return (
    <>
      <HeadingTitle size="xl" classes="mb-4">All teams ({teams.length})</HeadingTitle>
      <HeadingTitle size="lg" classes="mb-3" isSeperator>NBA teams ({nbaTeams.length})</HeadingTitle>
      <div className="grid grid-cols-4 gap-4 mb-4">
        {nbaTeams.map((team) => (
          <TeamsCard key={`team-${team.id}`} team={team} />
        ))}
      </div>
      <HeadingTitle size="lg" classes="mb-3" isSeperator>Other teams ({otherTeams.length})</HeadingTitle>
      <div className="grid grid-cols-4 gap-4 text-">
        {otherTeams.map((team) => (
          <TeamsCard key={`team-${team.id}`} team={team} />
        ))}
      </div>
    </>
  );
}
