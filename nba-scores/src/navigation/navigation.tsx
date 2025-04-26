import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import TeamsPage from "../pages/teams/teams";
import PlayersPage from "../pages/players/players";
import SeasonsPage from "../pages/seasons/seasons";
import Layout from "../components/Layout";
import TeamDetails from "../pages/teams/team-details";

export type RootStackParamList = {
  teams: undefined;
  teamDetails: undefined
  players: undefined;
  seasons: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <View className="h-full flex-1 bg-gray-100 relative">
      <NavigationContainer>
        <Layout>
          <Stack.Navigator
            initialRouteName="teams"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="teams" component={TeamsPage} />
            <Stack.Screen name="teamDetails" component={TeamDetails} />
            <Stack.Screen name="players" component={PlayersPage} />
            <Stack.Screen name="seasons" component={SeasonsPage} />
          </Stack.Navigator>
        </Layout>
      </NavigationContainer>
    </View>
  );
};

export default Navigation;
