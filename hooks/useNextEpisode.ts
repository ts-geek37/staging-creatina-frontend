// hooks/useNextEpisode.ts
import { ChoiceKey, EpisodeResponse } from "@/types";
import { useFetcher } from "./useFetcher";

export const useNextEpisode = () => {
  const { data, loading, error, execute } = useFetcher<EpisodeResponse>(
    "/sessions",
    "POST",
  );

  const nextEpisode = (
    sessionId: string,
    choice?: ChoiceKey,
    content?: string,
  ) => {
    return execute(undefined, undefined, {
      path: `/${sessionId}/next`,
      query: choice && content ? { last_choice: choice, content } : undefined,
    });
  };

  return {
    episode: data,
    nextEpisode,
    loading,
    error,
  };
};
