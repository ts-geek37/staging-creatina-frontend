// hooks/useFetcher.ts
import { api } from "@/lib/api";
import { useCallback, useState } from "react";

type FetchState<T> = {
  data?: T;
  error?: Error;
  loading: boolean;
};

export function useFetcher<TResponse, TBody = undefined>(
  url: string,
  method: "GET" | "POST" = "GET",
) {
  const [state, setState] = useState<FetchState<TResponse>>({
    loading: false,
  });

  const execute = useCallback(
    async (body?: TBody) => {
      setState({ loading: true });

      try {
        const data = await api<TResponse>(url, {
          method,
          body: body ? JSON.stringify(body) : undefined,
        });

        setState({ data, loading: false });
        return data;
      } catch (error) {
        setState({ error: error as Error, loading: false });
        throw error;
      }
    },
    [url, method],
  );

  return {
    ...state,
    execute,
  };
}
