"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useSessionContext } from "@/context/SessionContext";
import { useFinalReport } from "@/hooks/useFinalReport";
import { DilemmaNavigation } from "@/lib/navigation";
import { ReportPresentation } from "@/modules/dilemma";
import Layout from "@/modules/dilemma/Layout";
import LoadingState from "@/modules/dilemma/LoadingState";

const ReportPage = () => {
  const router = useRouter();
  const { sessionId } = useSessionContext();

  const { report, generateReport, loading, error } = useFinalReport();

  useEffect(() => {
    if (!sessionId || report || loading) return;
    generateReport(sessionId);
  }, [sessionId, report, loading, generateReport]);
  {
    loading && (
      <LoadingState
        title="Generating reflection"
        subtitle="This may take a few seconds"
      />
    );
  }

  return (
    <Layout title="Your Report" navigation={DilemmaNavigation.REPORT}>
      <ReportPresentation
        report={report ?? null}
        loading={loading}
        error={error}
        onComplete={() => router.push("/")}
      />
    </Layout>
  );
};

export default ReportPage;
