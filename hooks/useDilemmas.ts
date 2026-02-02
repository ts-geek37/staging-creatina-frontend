import { Dilemma } from "@/types";
import { useEffect } from "react";
import { useFetcher } from "./useFetcher";

export const useDilemmas = () => {
  const { data, loading, error, execute } = useFetcher<{ items: Dilemma[] }>(
    "/dilemmas",
    "GET",
  );

  useEffect(() => {
    execute();
  }, [execute]);

  return {
    dilemmas: data?.items ?? [],
    loading,
    error,
  };
};
