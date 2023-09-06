import { useQuery } from "@tanstack/react-query";
import Screenshot from "../entities/Screenshot";
import APIClient, { FetchResponse } from "../services/api-client";

const useScreenshots = (gameId: number) => {
  const screenshotsService = new APIClient<Screenshot>(
    `/games/${gameId}/screenshots`
  );

  return useQuery<FetchResponse<Screenshot>, Error>({
    queryKey: ["screenshots", gameId],
    queryFn: screenshotsService.getAll,
  });
};

export default useScreenshots;
