"use client";

import { useSessionContext } from "@/context/SessionContext";
import { useDilemma } from "@/hooks/useDilemma";
import DilemmaPresentation from "@/modules/dilemma/DilemmaPresentation";
import LoadingState from "@/modules/dilemma/LoadingState";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const DilemmaPage = () => {
  const { dilemmaId } = useParams<{ dilemmaId: string }>();
  const router = useRouter();

  const { dilemma, loading, error } = useDilemma(dilemmaId);
  const { startSession } = useSessionContext();
  const [starting, setStarting] = useState(false);

  const onStart = async () => {
    if (!dilemma || starting) return;
    setStarting(true);

    try {
      const { sessionId } = await startSession(dilemma.id);
      router.push(`/session/${sessionId}`);
    } finally {
      setStarting(false);
    }
  };

  if (loading) {
    return (
      <LoadingState title="Preparing dilemma" subtitle="Setting the context" />
    );
  }

  if (error || !dilemma) {
    return <div className="p-6 text-foreground/60">Dilemma not found</div>;
  }

  return (
    <DilemmaPresentation
      dilemma={dilemma}
      onStart={onStart}
      starting={starting}
    />
  );
};

export default DilemmaPage;
