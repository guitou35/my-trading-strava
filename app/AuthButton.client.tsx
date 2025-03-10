"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { signIn, signOut } from "@/app/auth/helper";
import { Button } from "@/components/ui/button";

export default function AuthButton() {
  const { data: session } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState(!!session?.user);

  useEffect(() => {
    console.log("session : " ,session)
    if(session == null){
      setIsLoggedIn(false);
      return;
    }
    setIsLoggedIn(!!session);
  }, [session]);

  return isLoggedIn ? (
    <Button
      onClick={async () => {
        await signOut();
        setIsLoggedIn(false);
      }}
    >
      {session?.user?.name} : Sign Out
    </Button>
  ) : (
    <Button onClick={async () => await signIn()}>Se connecter</Button>
  );
}