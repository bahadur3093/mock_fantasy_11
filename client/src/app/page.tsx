"use client";

import { useEffect, useState } from "react";

import { getCachedData } from "../../utils/cacheApi";
import { ITeams } from "../../models/Teams.model";
import TeamWrapper from "./components/cards/TeamsWrapper/TeamsWrapper";
import HeadingTitle from "./components/common/HeadingTitle/HeadingTitle";
import SearchBar from "./components/common/SearchBar/SearchBar";
import Loader from "./components/common/Loader/Loader";

export default function Home() {
  const [allTeams, setAllTeams] = useState<ITeams[]>([]);

  useEffect(() => {
    const getCachedTeams = async () => {
      try {
        const result = await getCachedData("teams");
        setAllTeams(result?.response || []);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    getCachedTeams();
  }, []);

  if (!allTeams.length) {
    return <Loader />;
  }

  return (
    <main className="pt-15">
      <SearchBar />
      <div>
        <HeadingTitle size="xl" classes="mb-4">
          All teams ({allTeams.length})
        </HeadingTitle>
        <TeamWrapper teams={allTeams} />
      </div>
    </main>
  );
}
