"use client";

import { useEffect, useState } from "react";

import { getCachedOrFreshData } from "../../utils/cacheApi";
import { ITeams } from "../../models/Teams.model";
import TeamWrapper from "./components/cards/TeamsWrapper/TeamsWrapper";
import HeadingTitle from "./components/common/HeadingTitle/HeadingTitle";
import Loader from "./components/common/Loader/Loader";
import { rapidBaseUrl } from "../../utils/urls";

export default function Home() {
  const [allTeams, setAllTeams] = useState<ITeams[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCachedTeams = async () => {
      try {
        const result = await getCachedOrFreshData(
          "teams",
          rapidBaseUrl.searchTeams
        );
        setAllTeams(result?.response || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching teams:", error);
        setLoading(false);
      }
    };

    getCachedTeams();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main>
      <div>
        <HeadingTitle size="xl" classes="mb-4">
          All teams ({allTeams.length})
        </HeadingTitle>
        <TeamWrapper teams={allTeams} />
      </div>
    </main>
  );
}
