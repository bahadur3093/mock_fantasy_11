import { useQuery } from "@tanstack/react-query";
import { View, Text } from "react-native";

import { fetchAllUsers } from "../../../services/blog/users.service";
import Loader from "../../components/Loader";
import FailedRequest from "../../components/FailedRequest";

const BlogPage = () => {
  const {
    data: allUsers,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => await fetchAllUsers().then((res) => res),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) return <FailedRequest />;

  return (
    <View>
      <Text>Welcome to the Blog Page!</Text>
    </View>
  );
};

export default BlogPage;
