"use client";

import { DilemmaNavigation } from "@/lib/navigation";
import React, { ReactNode } from "react";
import Header from "./Header";
import { useDilemmaNavigation } from "./hooks";

interface Props {
  title: string;
  children: ReactNode;
  navigation: DilemmaNavigation;
  dilemmaId?: string;
}

const Layout: React.FC<Props> = ({
  title,
  children,
  navigation,
  dilemmaId,
}) => {
  const nav = useDilemmaNavigation({
    navigation,
    dilemmaId,
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header title={title} {...nav} />

      <main className="flex-1 overflow-y-auto p-6 flex justify-center">
        {children}
      </main>
    </div>
  );
};

export default Layout;
