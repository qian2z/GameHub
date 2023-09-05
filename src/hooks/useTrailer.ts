import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import APIClient, { FetchResponse } from "../services/api-client";

const useTrailer = (gameId: number) => {
  const trailerService = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery<FetchResponse<Trailer>, Error>({
    queryKey: ["trailer", gameId],
    queryFn: trailerService.getAll,
  });
};

export default useTrailer;
