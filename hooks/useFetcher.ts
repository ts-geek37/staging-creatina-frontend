import { api } from "@/lib/api";
import { useCallback, useState } from "react";
 

type FetchState<TResponse> = {
  data?: TResponse;
  loading: boolean;
  error?: any;
};
// hooks/useFetcher.ts
type ExecuteOptions = {
  query?: Record<string, string>;
  path?: string;
};

const buildUrl = (
  base: string,
  path?: string,
  query?: Record<string, string>,
) => {
  const qs = query
    ? `?${new URLSearchParams(query).toString()}`
    : "";
  return `${base}${path ?? ""}${qs}`;
};

export function useFetcher<TResponse, TBody = void>(
  baseUrl: string,
  method: "GET" | "POST" = "GET",
) {
  const [state, setState] = useState<FetchState<TResponse>>({
    loading: false,
  });

  const execute = useCallback(
    async (
      body?: TBody,
      signal?: AbortSignal,
      options?: ExecuteOptions,
    ) => {
      setState({ loading: true });

      try {
        const url = buildUrl(
          baseUrl,
          options?.path,
          options?.query,
        );

        const data = await api<TResponse>(
          url,
          {
            method,
            body: body ? JSON.stringify(body) : undefined,
          },
          signal,
        );

        setState({ data, loading: false });
        return data;
      } catch (error) {
        setState({ error: error as Error, loading: false });
        throw error;
      }
    },
    [baseUrl, method],
  );

  return { ...state, execute };
}
