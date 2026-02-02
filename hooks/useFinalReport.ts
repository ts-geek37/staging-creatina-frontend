// hooks/useFinalReport.ts
import { useCallback } from "react";
import { useFetcher } from "./useFetcher";

type FinalReportResponse = {
  report: string;
};

export const useFinalReport = () => {
  const { data, loading, error, execute } =
    useFetcher<FinalReportResponse>(
      "/sessions",
      "POST",
    );

  const generateReport = useCallback(
    async (sessionId: string) => {
      const result = await execute(
        undefined,
        undefined,
        { path: `/${sessionId}/report` },
      );

      return result.report;
    },
    [execute],
  );

  return {
    report: data?.report,
    generateReport,
    loading,
    error,
  };
};
