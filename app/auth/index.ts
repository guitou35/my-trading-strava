import NextAuth, { NextAuthConfig  } from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma"


export const BASE_PATH = "/api/auth";


const authOptions: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  session: {strategy: "jwt"},
  secret: process.env.NEXTAUTH_SECRET,
  basePath: BASE_PATH,
  ...authConfig
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);