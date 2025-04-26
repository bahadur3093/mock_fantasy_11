import { FlatList, View } from "react-native";
import { useQuery } from "@tanstack/react-query";

import { fetchAllTeams } from "../../../services/teams.service";
import Loader from "../../components/Loader";
import FailedRequest from "../../components/FailedRequest";
import TeamThumbnail from "../../components/cards/TeamThumbnail";
import Title from "../../components/Title";

const TeamsPage = () => {
  const {
    data: allTeams,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["all-teams"],
    queryFn: async () => await fetchAllTeams().then((res) => res),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) return <FailedRequest />;

  return (
    <View className="flex-1 bg-white py-24">
      <Title classes="px-4 text-3xl mb-4">Teams</Title>
      <FlatList
        data={allTeams?.filter(t => t.nbaFranchise && !t.allStar)}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 16,
          paddingHorizontal: 0,
        }}
        contentContainerStyle={{
          paddingBottom: 16,
        }}
        renderItem={({ item }) => (
          <TeamThumbnail
            key={`all-team-${item.id}`}
            team={item}
            classes="w-[48%]"
          />
        )}
        className="px-4"
      />
    </View>
  );
};

export default TeamsPage;
