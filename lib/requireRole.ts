import { auth } from "@/auth";
import { redirect } from "next/navigation";

export async function requireRole(role: string) {
  const session = await auth();

  if (!session || session.user.role !== role) {
    redirect("/login");
  }
}
