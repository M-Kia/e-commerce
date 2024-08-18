"use client";
import { SessionProvider } from "next-auth/react";
import { JSX, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Providers(props: Props): JSX.Element {
  return <SessionProvider>{props.children}</SessionProvider>;
}
