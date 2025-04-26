import { ScrollView } from "react-native-gesture-handler";
import { View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useState } from "react";

import { Dropdown } from "../../components/Dropdown";
import { fetchPlayersByTeamIdAndSeason } from "../../../services/teams.service";
import { getSelectedTeamData } from "../../store/selector/team.selector";
import Loader from "../../components/Loader";
import FailedRequest from "../../components/FailedRequest";
import TeamThumbnail from "../../components/cards/TeamThumbnail";
import Title from "../../components/Title";
import PlayerThumbnail from "../../components/cards/PlayerThumbnail";

const TeamDetails = () => {
  const teamDetails = useSelector(getSelectedTeamData());
  const currentSeason = new Date().getFullYear() - 1;
  const [selectedYear, setSelectedYear] = useState<string | number>(
    currentSeason
  );
  const {
    data: roasters,
    isLoading,
    error,
  } = useQuery({
    queryKey: [`team-details-${teamDetails.id}-${selectedYear}`, selectedYear],
    queryFn: async () => {
      const res = await fetchPlayersByTeamIdAndSeason(
        teamDetails.id,
        selectedYear as number
      );
      return res;
    },
    staleTime: 1000 * 60 * 5,
  });

  const options = Array.from(
    { length: 10 },
    (_, index) => new Date().getFullYear() - 1 - index
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) return <FailedRequest />;

  return (
    <View className="flex-1 bg-white py-24 px-4 ">
      <ScrollView>
        <View className="flex flex-col grid-cols-3 justify-center mb-4">
          {teamDetails && <TeamThumbnail team={teamDetails} classes="w-full" />}
        </View>
        <View className="flex flex-row flex-wrap justify-between items-center mb-4">
          <Title classes="text-2xl">Roaster (by year):</Title>
          <View className="col-auto">
            <Dropdown
              options={options}
              selectedValue={selectedYear}
              onSelect={setSelectedYear}
              placeholder="Select year"
            />
          </View>
        </View>
        <View className="flex flex-row flex-wrap">
          {roasters?.map((player) => (
            <PlayerThumbnail key={`player-${player.id}`} player={player} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default TeamDetails;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
