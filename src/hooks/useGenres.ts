import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../Services/api-Client";
import genre from "../data/genre";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    initialData: genre,
  });
};
export default useGenres;
