"use client";
import { useSession } from "next-auth/react";

import { signIn, signOut } from "@/app/auth/helper";


export default function AuthButton() {
  const session = useSession();

  return session?.data?.user ? (
    <button
      onClick={async () => {
        await signOut();
        await signIn();
      }}
    >
      {session.data?.user?.name} : Sign Out
    </button>
  ) : (
    <button onClick={async () => await signIn()}>Se connecter</button>
  );
}