"use client";

import { DilemmaNavigation } from "@/lib/navigation";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

interface Params {
  navigation: DilemmaNavigation;
  dilemmaId?: string;
}

export const useDilemmaNavigation = ({ navigation, dilemmaId }: Params) => {
  const router = useRouter();

  return useMemo(() => {
    switch (navigation) {
      case DilemmaNavigation.START:
        return {
          showBackButton: true,
          onBackClick: () => router.push("/"),
        };

      case DilemmaNavigation.EPISODE:
        return {
          showBackButton: true,
          onBackClick: () =>
            dilemmaId ? router.push(`/dilemma/${dilemmaId}`) : router.push("/"),
        };

      case DilemmaNavigation.REPORT:
        return {
          showBackButton: true,
          onBackClick: () => router.push("/"),
        };

      default:
        return {
          showBackButton: true,
          onBackClick: () => router.push("/"),
        };
    }
  }, [navigation, dilemmaId, router]);
};
