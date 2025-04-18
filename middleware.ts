// import { NextResponse } from "next/server";
// import { auth, BASE_PATH } from "@/app/auth";

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

// export default auth((req) => {
//   const reqUrl = new URL(req.url);
//   if (!req.auth && reqUrl?.pathname !== "/") {
//     return NextResponse.redirect(
//       new URL(
//         `${BASE_PATH}/signin?callbackUrl=${encodeURIComponent(
//           reqUrl?.pathname
//         )}`,
//         req.url
//       )
//     );
//   }
// });
import NextAuth from "next-auth"
import authConfig from "./auth.config"
 
export const { auth: middleware } = NextAuth(authConfig)