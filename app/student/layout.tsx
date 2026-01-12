import { requireRole } from "@/lib/requireRole";
import Navbar from "./components/nav";

export default async function Layout({ children }: { children: React.ReactNode }) {
  await requireRole("ADMIN");
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
