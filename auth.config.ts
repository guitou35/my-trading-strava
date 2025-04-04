import type { NextAuthConfig } from "next-auth"
import Strava from "next-auth/providers/strava"

const stravaId = process.env.STRAVA_CLIENT_ID;
const stravaSecret = process.env.STRAVA_CLIENT_SECRET

if (!stravaId || !stravaSecret){
  throw new Error('Missing strava id or strava secret')
}
 
// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [Strava({
    clientId: stravaId,
    clientSecret: stravaSecret,
    authorization: {
      params : {
        scope: "activity:read_all"
      }
    },
    async profile(profile) {
      return {
        id: profile.id,
        name: `${profile.firstname} ${profile.lastname}`,
        email: null,
        image: profile.profile,
        username: profile.username
      };
    },
})],
} satisfies NextAuthConfig