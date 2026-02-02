"use client";

import { ChoiceKey, EpisodeResponse } from "@/types";
import { EB_Garamond } from "next/font/google";

const serif = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

interface Props {
  episode: EpisodeResponse;
  loading?: boolean;
  onChoose: (choice: ChoiceKey, content: string) => void;
}

const EpisodePresentation: React.FC<Props> = ({
  episode,
  loading,
  onChoose,
}) => {
  return (
    <div className="max-w-2xl w-full space-y-10">
      <div className="text-sm text-foreground/60 border-b pb-4">
        {episode.progress}
      </div>

      <div className={`${serif.className} space-y-6`}>
        {episode.narrative.split("\n\n").map((p, i) => (
          <p key={i} className="text-lg leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      <div className="space-y-3 pt-8 border-t">
        {Object.entries(episode.options).map(([k, v]) => (
          <button
            key={k}
            disabled={loading || episode.episode_number === 6}
            onClick={() => onChoose(k as ChoiceKey, v)}
            className={`w-full p-4 text-left border transition
      ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-muted"}`}
          >
            <strong>{k}.</strong> {v}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EpisodePresentation;
