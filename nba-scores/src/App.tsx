import "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { store } from "./store";
import Navigation from "./navigation/navigation";
import "./global.css";

const queryClient = new QueryClient();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Navigation />
        </QueryClientProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
