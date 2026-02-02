export type SessionStatus = "active" | "completed";

export type ChoiceKey = "A" | "B" | "C" | "D" | "E";

export type OptionsMap = Record<ChoiceKey, string>;

export interface Dilemma {
  id: string;
  title: string;
  summary: string;
  category: string;
}

export interface DilemmaDetail extends Dilemma {
  constraints: string;
}

export interface SessionCreateResponse {
  session_id: string;
}

export interface EpisodeResponse {
  episode_number: number;
  narrative: string;
  options: OptionsMap;
  progress: string;
  status: SessionStatus;
  next_url: string;
}

export interface SessionState {
  sessionId: string;
  episodeNumber: number;
  narrative: string;
  options: OptionsMap;
  status: SessionStatus;
  nextUrl: string;
}

export interface ReportResponse {
  report: string;
}

export interface ApiError {
  detail: string;
}
