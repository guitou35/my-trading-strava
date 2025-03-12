
import type { NextAuthConfig } from "next-auth"
import Strava from "next-auth/providers/strava"
 
// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [Strava({
    clientId: process.env.STRAVA_CLIENT_ID ?? "",
    clientSecret: process.env.STRAVA_CLIENT_SECRET ?? "",
    authorization: {
      params : {
        scope: "activity:read_all"
      }
    }
})],
} satisfies NextAuthConfig