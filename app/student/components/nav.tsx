"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import {
  Home,
  Users,
  GraduationCap,
  BookOpen,
  School,
} from "lucide-react";
import { IconMoneybag } from "@tabler/icons-react";

export default function Navbar() {
  const menuItems = [
    { icon: Home, link: "/student", label: "Home" },
    { icon: Users, link: "/student/results", label: "Results" },
    { icon: GraduationCap, link: "/student/fees", label: "Fees" },
    { icon: School, link: "/student/timetable", label: "Timetable" },
    { icon: BookOpen, link: "/student/calendar", label: "School Calendar" },
    { icon: IconMoneybag, link: "/student/profile", label: "profile" },
  ];
  
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-card border-r flex flex-col font-dmSans tracking-tight h-full overflow-y-auto no-scrollbar pb-8 z-10 shadow-xl/5">
      {/* Logo */}
      <Link
        href={"/"}
        className="p-6 flex items-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-300"
      >
        <div className="w-8 h-8 bg-blue-950 rounded-lg flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold">Halal Impact</span>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <div key={item.label}>
            <Link
              href={item.link}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-500 ${
                pathname === item.link
                  ? "text-blue-950 dark:text-white bg-blue-50 dark:bg-blue-950/50 font-semibold"
                  : "text-muted-foreground hover:text-blue-950 dark:hover:text-white hover:bg-blue-50/50 dark:hover:bg-blue-950/40"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </div>
            </Link>
          </div>
        ))}
      </nav>
    </aside>
  );
}
