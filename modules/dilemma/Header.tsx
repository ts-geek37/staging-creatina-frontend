"use client";

import { Button } from "@/components/ui/button";
import { EB_Garamond } from "next/font/google";

const serif = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

interface Props {
  showBackButton?: boolean;
  onBackClick?: () => void;
  title?: string;
}

const Header: React.FC<Props> = ({
  showBackButton = false,
  onBackClick,
  title,
}) => {
  return (
    <header className="border-b border-border/50 bg-background sticky top-0 z-50">
      <div className="max-w-4xl mx-auto h-20 px-6 flex items-center gap-4">
        {showBackButton && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onBackClick}
            className="text-foreground/70"
          >
            ← Back
          </Button>
        )}

        <h1
          className={`${serif.className} text-2xl md:text-3xl text-foreground`}
        >
          {title || "Creatina"}
        </h1>
      </div>
    </header>
  );
};

export default Header;
