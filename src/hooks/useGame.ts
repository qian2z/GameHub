import { useQuery } from "@tanstack/react-query";
import { Game } from "../entities/Game";
import APIClient from "../services/api-client";

const gameService = new APIClient<Game>("/games");
const useGame = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: ["games", slug],
    queryFn: () => gameService.get(slug),
  });
};

export default useGame;
