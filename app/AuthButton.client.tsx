"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { signIn, signOut } from "@/app/auth/helper";

export default function AuthButton() {
  const { data: session } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState(!!session?.user);

  useEffect(() => {
    if(session == null){
      setIsLoggedIn(false);
      return;
    }
    setIsLoggedIn(!!session);
  }, [session]);

  return isLoggedIn ? (
    <button
      onClick={async () => {
        await signOut();
        setIsLoggedIn(false);
      }}
    >
      {session?.user?.name} : Sign Out
    </button>
  ) : (
    <button onClick={async () => await signIn()}>Se connecter</button>
  );
}