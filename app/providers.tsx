"use client";
import React, { PropsWithChildren } from "react";
import { SubjectProvider } from "./context/context-calls";
import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <SubjectProvider>
        <div className="dark:bg-gray-900 bg-white h-[100vh] overflow-y-scroll">
          {children}
        </div>
      </SubjectProvider>
    </SessionProvider>
  );
};

export default Providers;
