"use client";

// server only
// import { signIn } from "@/auth";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
// import { auth } from "@/auth";

export default function SignInButton() {
    
//   const session = await auth();
  return (
    <Button
      onClick={() => signIn("google")}
    //   className={!session?.user ? "hidden" : ""}
    >
      Sign in with Google
    </Button>
  );
}
