"use client";

import { useEffect, useState } from "react";

import { rapidBaseUrl } from "../../../utils/urls";
import { getCachedOrFreshData } from "../../../utils/cacheApi";
import { ITeams } from "../../../models/Teams.model";
import HeadingTitle from "../components/common/HeadingTitle/HeadingTitle";
import TeamWrapper from "../components/cards/TeamsWrapper/TeamsWrapper";
import Loader from "../components/common/Loader/Loader";

export default function Teams() {
  const [teams, setTeams] = useState<ITeams[]>([]);

  useEffect(() => {
    const getAllTeams = async () => {
      try {
        const teams = await getCachedOrFreshData(
          "teams",
          rapidBaseUrl.searchTeams
        );
        setTeams(teams.response);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    getAllTeams();
  }, []);

  if (!teams.length) {
    return <Loader />;
  }

  return (
    <>
      <HeadingTitle size="xl" classes="mb-4">
        All teams ({teams.length})
      </HeadingTitle>
      <TeamWrapper teams={teams} />
    </>
  );
}
