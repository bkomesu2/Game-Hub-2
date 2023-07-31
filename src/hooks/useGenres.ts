import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../Services/api-Client";
import genre from "../data/genre";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    initialData: genre,
    staleTime: ms("24h"),
  });
};
export default useGenres;
