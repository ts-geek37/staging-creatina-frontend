// hooks/useDilemma.ts
import { useEffect } from "react";
import { Dilemma } from "@/types";
import { useFetcher } from "./useFetcher";

export const useDilemma = (dilemmaId?: string) => {
  const { data, loading, error, execute } =
    useFetcher<Dilemma>(
      dilemmaId ? `/dilemmas/${dilemmaId}` : "",
      "GET",
    );

  useEffect(() => {
    if (dilemmaId) {
      execute();
    }
  }, [dilemmaId, execute]);

  return {
    dilemma: data,
    loading,
    error,
  };
};
