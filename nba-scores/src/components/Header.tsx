import { useNavigation, NavigationProp } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { RootStackParamList } from "../navigation/navigation";

const Header = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View className="mb-6 w-2/3 bg-white shadow-lg flex-row justify-around items-center h-24 border-t border-gray-200 rounded-3xl">
      <TouchableOpacity
        className="flex items-center"
        onPress={() => navigation.navigate("teams")}
      >
        <Ionicons name="basketball" size={48} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        className="flex items-center"
        onPress={() => navigation.navigate("players")}
      >
        <Ionicons name="person" size={48} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        className="flex items-center"
        onPress={() => navigation.navigate("seasons")}
      >
        <Ionicons name="calendar" size={48} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        className="flex items-center"
        onPress={() => navigation.navigate("blog")}
      >
        <Ionicons name="newspaper" size={48} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
