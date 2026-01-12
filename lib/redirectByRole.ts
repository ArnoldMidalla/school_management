import { redirect } from "next/navigation";

export function redirectByRole(role: string) {
  if (role === "ADMIN") redirect("/admin/dashboard");
  if (role === "TEACHER") redirect("/teacher/dashboard");
  redirect("/student/dashboard");
}
