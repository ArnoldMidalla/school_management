import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";
import { PostgresAdapter } from "@/lib/auth-adapter";

declare module "next-auth" {
  interface User {
    role?: string;
  }
  interface Session {
    user: User & {
      role: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
  }
}

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   providers: [Google({})],

//   callbacks: {
//     async jwt({ token }) {
//       if (!token.role) {
//         token.role = "STUDENT";
//       }
//     //   hardcode. if this email also
//       if (token.email === "midallaarnold@gmail.com") {
//         token.role = "ADMIN";
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user.role = token.role as "ADMIN" | "TEACHER" | "STUDENT";
//       return session;
//     },
//   },
// });

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PostgresAdapter(),

  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      // First login → user comes from DB
      if (user) {
        token.role = (user as any).role;
        token.id = (user as any).id;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.role = token.role as
        | "ADMIN"
        | "TEACHER"
        | "STUDENT";
      session.user.id = token.id as string;
      return session;
    },
  },
});
