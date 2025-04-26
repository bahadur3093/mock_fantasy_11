import { RouteProp, useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";

import { RootStackParamList } from "../../navigation/navigation";

type TeamDetailsRouteProp = RouteProp<RootStackParamList, "teams">;

const PlayersPage = () => {
  const route = useRoute<TeamDetailsRouteProp>();

  return (
    <View className="h-full relative bg-blue-300">
      <Text>Players Page</Text>
    </View>
  );
};

export default PlayersPage;
