"use client";

import { useCreateSession } from "@/hooks/useCreateSession";
import { useFinalReport } from "@/hooks/useFinalReport";
import { useNextEpisode } from "@/hooks/useNextEpisode";
import { ChoiceKey, EpisodeResponse } from "@/types";
import { useParams } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface SessionContextValue {
  sessionId: string | null;
  episode: EpisodeResponse | null;
  loading: boolean;
  error: string | null;
  startSession: (dilemmaId: string) => Promise<{ sessionId: string | null }>;
  chooseOption: (choice: ChoiceKey, content: string) => Promise<void>;
  generateReport: () => Promise<string | undefined>;
}

const SessionContext = createContext<SessionContextValue | null>(null);

interface Props {
  children: ReactNode;
}

const normalizeParam = (param: string | string[] | undefined): string | null => {
  if (!param) return null;
  return Array.isArray(param) ? param[0] ?? null : param;
};

const SessionProvider = ({ children }: Props) => {
  const params = useParams();
  const sessionIdFromRoute = normalizeParam(params?.sessionId);

  const [sessionId, setSessionId] = useState<string | null>(
    sessionIdFromRoute,
  );
  const [episode, setEpisode] = useState<EpisodeResponse | null>(null);

  const createSession = useCreateSession();
  const nextEpisode = useNextEpisode();
  const finalReport = useFinalReport();

  const loading =
    createSession.loading || nextEpisode.loading || finalReport.loading;

  const error =
    createSession.error || nextEpisode.error || finalReport.error;

  /**
   * Resume session if sessionId exists in route
   * This triggers replay path on backend if needed
   */
  useEffect(() => {
    if (!sessionIdFromRoute) return;

    // Avoid refetch if already loaded
    if (episode || nextEpisode.loading) return;

    const resume = async () => {
      const resumed = await nextEpisode.nextEpisode(sessionIdFromRoute);
      if (resumed) {
        setSessionId(sessionIdFromRoute);
        setEpisode(resumed);
      }
    };

    resume();
  }, [sessionIdFromRoute]);

  /**
   * Start a brand-new session
   */
  const startSession = async (dilemmaId: string) => {
    const id = await createSession.createSession(dilemmaId);
    if (!id) return { sessionId: null };

    setSessionId(id);

    const firstEpisode = await nextEpisode.nextEpisode(id);
    if (firstEpisode) {
      setEpisode(firstEpisode);
    }

    return { sessionId: id };
  };

  /**
   * Submit a choice and advance episode
   */
  const chooseOption = async (choice: ChoiceKey, content: string) => {
    if (!sessionId) return;

    const next = await nextEpisode.nextEpisode(sessionId, choice, content);
    if (next) {
      setEpisode(next);
    }
  };

  /**
   * Generate final report
   */
  const generateReport = async () => {
    if (!sessionId) return;
    return finalReport.generateReport(sessionId);
  };

  const value = useMemo<SessionContextValue>(
    () => ({
      sessionId,
      episode,
      loading,
      error,
      startSession,
      chooseOption,
      generateReport,
    }),
    [sessionId, episode, loading, error],
  );

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
};

const useSessionContext = () => {
  const ctx = useContext(SessionContext);
  if (!ctx) {
    throw new Error("useSessionContext must be used within SessionProvider");
  }
  return ctx;
};

export { SessionProvider, useSessionContext };
