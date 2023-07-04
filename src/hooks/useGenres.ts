import { useQuery } from "@tanstack/react-query";
import apiClient from "../Services/api-Client";
import genre from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () => apiClient.get("/genres").then((res) => res.data.results),
    initialData: genre,
  });
};

export default useGenres;
