// hooks/useCreateSession.ts
import { useFetcher } from "./useFetcher";

type CreateSessionResponse = {
  session_id: string;
};

export const useCreateSession = () => {
  const { execute, loading, error } = useFetcher<CreateSessionResponse, void>(
    "/sessions",
    "POST",
  );

  const createSession = async (dilemmaId: string) => {
    const result = await execute(undefined, undefined, {
      query: { dilemma_id: dilemmaId },
    });
    return result.session_id;
  };

  return { createSession, loading, error };
};
