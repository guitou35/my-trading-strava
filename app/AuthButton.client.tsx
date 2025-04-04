"use client";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "@/app/auth/helper";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AuthButton() {
  const { data: session, status } = useSession();
  const [isLogging, setIsLogging] = useState(status === 'authenticated')

  return (
    <>
    {isLogging  ? (
    <Button
      onClick={async () => {
        setIsLogging(false);
        await signOut();
      }}
    >
      {session?.user?.name} : Se deconnecter
    </Button>
  ) : (
    <Button onClick={async () => await signIn()}>Se connecter</Button>
  ) }
  </>
)
}