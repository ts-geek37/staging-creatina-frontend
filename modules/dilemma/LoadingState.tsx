"use client";

import { EB_Garamond } from "next/font/google";

const serif = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
});

interface Props {
  title?: string;
  subtitle?: string;
}

const LoadingState: React.FC<Props> = ({
  title = "Loading",
  subtitle = "Please wait a moment",
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen m-auto w-full text-center space-y-6">
 
      <div className="flex gap-2">
        <span className="h-2 w-2 rounded-full bg-foreground/40 animate-bounce [animation-delay:-0.3s]" />
        <span className="h-2 w-2 rounded-full bg-foreground/40 animate-bounce [animation-delay:-0.15s]" />
        <span className="h-2 w-2 rounded-full bg-foreground/40 animate-bounce" />
      </div>

      <div className="space-y-1">
        <p className={`${serif.className} text-lg text-foreground`}>
          {title}
        </p>
        <p className="text-sm text-foreground/60">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default LoadingState;
