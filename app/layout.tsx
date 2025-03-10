import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react"
import { auth, BASE_PATH } from "./auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My garden ",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  console.log("session init : ", session)
  // if (session && session.user) {
  //   session.user = {
  //     name: session.user.name,
  //     email: session.user.email,
  //   };
  // }
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider basePath={BASE_PATH} session={session}>
        {children}
        </SessionProvider>
      </body>
    </html>
  );
}
