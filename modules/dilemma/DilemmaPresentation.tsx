"use client";

import { Button } from "@/components/ui/button";
import { DilemmaNavigation } from "@/lib/navigation";
import { Dilemma } from "@/types";
import { EB_Garamond } from "next/font/google";
import Layout from "./Layout";

const serif = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
interface Props {
  dilemma: Dilemma;
  onStart: () => void;
  starting?: boolean;
}

const DilemmaPresentation: React.FC<Props> = ({
  dilemma,
  onStart,
  starting,
}) => {
  return (
    <Layout
      title="Creatina"
      navigation={DilemmaNavigation.START}
      dilemmaId={dilemma.id}
    >
      <div className="max-w-2xl w-full space-y-12">
        <h1 className={`${serif.className} text-4xl`}>{dilemma.title}</h1>

        <p
          className="text-lg text-foreground/70"
          dangerouslySetInnerHTML={{
            __html: dilemma.summary?.replace(/\n/g, "<br>"),
          }}
        />

        <Button onClick={onStart} disabled={starting}>
          {starting ? "Starting…" : "Start"}
        </Button>
      </div>
    </Layout>
  );
};

export default DilemmaPresentation;
