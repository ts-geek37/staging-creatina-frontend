"use client";

import { Button } from "@/components/ui/button";
import { EB_Garamond } from "next/font/google";

const serif = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

interface Props {
  report: string | null;
  loading?: boolean;
  error?: string | null;
  onComplete: () => void;
}

const ReportPresentation: React.FC<Props> = ({
  report,
  loading,
  error,
  onComplete,
}) => {
  return (
    <div className="max-w-2xl mx-auto space-y-12">
      <div className="space-y-4 border-b border-border pb-8">
        <h1 className={`${serif.className} text-3xl text-foreground`}>
          Reflection
        </h1>
        <p className="text-sm text-foreground/60">
          A mirror based on your decisions.
        </p>
      </div>

      {loading && <p className="text-foreground/60">Generating report…</p>}

      {error && <p className="text-destructive">{error}</p>}

      {report && (
        <div className="space-y-6 text-foreground/80 leading-relaxed whitespace-pre-line">
          {report}
        </div>
      )}

      <div className="pt-12 text-center">
        <Button onClick={onComplete}>Continue</Button>
      </div>
    </div>
  );
};

export default ReportPresentation;
