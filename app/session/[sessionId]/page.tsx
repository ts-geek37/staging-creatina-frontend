"use client";

import { useSessionContext } from "@/context/SessionContext";
import { DilemmaNavigation } from "@/lib/navigation";
import { EpisodePresentation } from "@/modules/dilemma";
import Layout from "@/modules/dilemma/Layout";
import LoadingState from "@/modules/dilemma/LoadingState";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SessionPage = () => {
  const router = useRouter();
  const { episode, loading, error, chooseOption } = useSessionContext();

  useEffect(() => {
    if (episode?.status === "completed") {
      router.replace("/report");
    }
  }, [episode, router]);
  if (loading && !episode) {
    return (
      <LoadingState
        title="Continuing your session"
        subtitle="Thinking through the next step"
      />
    );
  }

  if (error) {
    return <div className="p-6 text-destructive">{error}</div>;
  }

  if (!episode) {
    return <div className="p-6 text-foreground/60">No active session</div>;
  }

  return (
    <Layout title="Creatina" navigation={DilemmaNavigation.EPISODE}>
      <EpisodePresentation
        episode={episode}
        loading={loading}
        onChoose={chooseOption}
      />
    </Layout>
  );
};

export default SessionPage;
