import NextAuth from "next-auth/next";
import { authOptions } from "@utils/nextAuth/authOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
