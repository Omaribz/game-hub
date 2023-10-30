import { useQuery } from "@tanstack/react-query";
import APIClient from "../Services/api-client";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>('/games');

const useGame = (slug: string) => useQuery({
    queryKey: ['games', slug], //Everytime the slug changes react query will fetch another game from the backend
    queryFn: () => apiClient.get(slug)
});

export default useGame;