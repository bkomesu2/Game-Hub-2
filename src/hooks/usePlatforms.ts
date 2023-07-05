import APIClient, { FetchResponse } from "./../Services/api-Client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
  });
};

export default usePlatforms;
