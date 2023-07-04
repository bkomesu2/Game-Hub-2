import apiClient from "../Services/api-Client";
import { FetchResponse } from "./../Services/api-Client";
import { useQuery } from "@tanstack/react-query";
interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data.results),
  });
};

export default usePlatforms;
