import { Text, TouchableOpacity, View, Image } from "react-native";

import { IPlayer } from "../../../models/Player.model";

interface IPlayerThumbnailProps {
  player: IPlayer;
}

const PlayerThumbnail = ({ player }: IPlayerThumbnailProps) => {
  const initials = `${player.firstname.charAt(0)}${player.lastname.charAt(0)}`;

  return (
    <TouchableOpacity className="w-1/3 p-2 flex items-center justify-center">
      <View className="w-24 h-24 rounded-full bg-blue-500 items-center justify-center flex">
        <Text className="text-white text-2xl font-bold">{initials}</Text>
      </View>
      <Text className="text-center text-sm font-medium mt-2">
        {player.firstname} {player.lastname}
      </Text>
    </TouchableOpacity>
  );
};

export default PlayerThumbnail;
