import { NavigationProp, useNavigation } from "@react-navigation/native";

import { Text, View, Image, TouchableOpacity } from "react-native";
import { ITeam } from "../../../models/Teams.model";
import { RootStackParamList } from "../../navigation/navigation";
import { useDispatch } from "react-redux";
import { setTeamDetail } from "../../store/slice/teamSlice";

interface ITeamThumbnailProps {
  team: ITeam;
  classes?: string;
}

const TeamThumbnail = ({ team, classes }: ITeamThumbnailProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onChangeTeamHandler = () => {
    navigation.navigate("teamDetails");
    dispatch(setTeamDetail(team));
  };

  return (
    <View key={`team-${team.id}`} className={`${classes}`}>
      <TouchableOpacity onPress={() => onChangeTeamHandler()}>
        <View className="border border-gray-300 rounded-lg bg-white shadow-md shadow-gray-300 p-4">
          <View className="flex items-center justify-center mb-4">
            <Image
              source={{ uri: team.logo }}
              className="w-40 h-40"
              resizeMode="contain"
            />
          </View>
          <Text className="text-lg font-bold text-center">{team.nickname}</Text>
          <Text className="text-sm text-gray-600 text-center">{team.name}</Text>
          <Text className="text-sm text-gray-600 text-center">{team.city}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TeamThumbnail;
