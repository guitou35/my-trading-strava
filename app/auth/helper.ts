"use server";
import { signIn as naSignIn, signOut as naSignOut } from ".";

export async function signIn() {
  await naSignIn("strava", {redirectTo: "/home"});
}

export async function signOut() {
  await naSignOut({redirectTo: "/"});
}