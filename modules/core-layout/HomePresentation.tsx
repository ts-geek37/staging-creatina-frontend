"use client";

import { useDilemmas } from "@/hooks/useDilemmas";
import { EB_Garamond } from "next/font/google";
import { useRouter } from "next/navigation";

const serif = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const normalizeCategory = (category: string) =>
  category.split("_").join(" ").toUpperCase();

const HomePresentation = () => {
  const router = useRouter();
  const { dilemmas, loading, error } = useDilemmas();

  const onSelectDilemma = (dilemmaId: string) => {
    router.push(`/dilemma/${dilemmaId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1
            className={`${serif.className} text-5xl md:text-6xl text-foreground text-balance mb-4`}
          >
            Creatina
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
            Mental training through interactive narrative dilemmas. Explore how
            you deliberate when something genuinely matters.
          </p>
        </div>
      </header>

      <main className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <section className="mb-16">
            <p className="text-foreground/80 leading-relaxed text-lg mb-6">
              Each dilemma is a narrative journey. You will encounter seven
              moments of decision. After each choice, the story evolves. There
              is no scoring. There are no right answers. There are only choices,
              and what those choices reveal about how you think.
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg">
              At the end, you receive a report. Not a judgment. An observation.
              The report examines your pattern of deliberation, the tensions you
              navigate, and the values that emerge from your choices.
            </p>
          </section>

          <section>
            <h2 className={`${serif.className} text-3xl text-foreground mb-8`}>
              Select a Dilemma
            </h2>

            {/* Loading state */}
            {loading && <p className="text-foreground/60">Loading dilemmas…</p>}

            {/* Error state */}
            {error && <p className="text-destructive">{error}</p>}

            {/* Data state */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {dilemmas.map((dilemma) => (
                <button
                  key={dilemma.id}
                  onClick={() => onSelectDilemma(dilemma.id)}
                  className="text-left border border-border/50 rounded-sm p-6 bg-card hover:bg-secondary/20 transition-all duration-300 hover:shadow-md hover:border-border group/card h-full flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {dilemma.category && (
                      <p className="text-xs text-foreground/50 uppercase tracking-widest">
                        {normalizeCategory(dilemma.category)}{" "}
                      </p>
                    )}
                    <h3
                      className={`${serif.className} text-lg text-foreground leading-tight group-hover/card:text-accent transition-colors`}
                    >
                      {dilemma.title}
                    </h3>
                  </div>
                  <div className="space-y-4 mt-4">
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {dilemma.summary.slice(0, 100)}
                    </p>
                    <div className="pt-2">
                      <span className="text-xs text-foreground/50 uppercase tracking-wide">
                        Begin →
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>

          <section className="mt-16 pt-12 border-t border-border/50">
            <h3 className={`${serif.className} text-2xl text-foreground mb-6`}>
              About Creatina
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-foreground/50 uppercase tracking-wide mb-2">
                  Duration
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Each dilemma takes approximately 15–20 minutes. The experience
                  is self-paced. You may pause and return later.
                </p>
              </div>
              <div>
                <p className="text-sm text-foreground/50 uppercase tracking-wide mb-2">
                  Privacy
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Your choices and report remain private. No data is collected
                  or stored. This experience is for you alone.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-border/50 py-8 px-6 mt-16">
        <div className="max-w-4xl mx-auto text-sm text-foreground/50 text-center">
          <p>
            Creatina explores deliberation, not judgment. There are no wrong
            answers.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePresentation;
