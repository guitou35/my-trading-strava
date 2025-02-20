import NextAuth, { NextAuthConfig  } from "next-auth";
import Strava from "next-auth/providers/strava";

export const BASE_PATH = "/api/auth";


const authOptions: NextAuthConfig = {
  providers: [
    Strava({
        clientId: process.env.STRAVA_CLIENT_ID ?? "",
        clientSecret: process.env.STRAVA_CLIENT_SECRET ?? "",
        authorization: {
          params : {
            scope: "activity:read_all"
          }
        }
    })
  ],
  // callbacks: {
  //   async jwt({ token, account }) {
  //     if (account) {
  //       token.accessToken = account.access_token;
  //     }
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     session.accessToken = token.accessToken;
  //     return session;
  //   },
  // },
  secret: process.env.NEXTAUTH_SECRET,
  basePath: BASE_PATH,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);