"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import {
  Home,
  Users,
  GraduationCap,
  BookOpen,
  User,
  School,
  FileText,
  Calendar,
  ClipboardCheck,
  PenTool,
  Bell,
  Bus,
  Building,
} from "lucide-react";
import { IconMoneybag } from "@tabler/icons-react";

export const menuItems = [
  { icon: Home, link: "/admin", label: "Home" },
  { icon: Users, link: "/admin/students", label: "Students" },
  {
    icon: GraduationCap,
    link: "/admin/teachers",
    label: "Teachers",
    submenu: ["All Teachers", "Teachers Details"],
  },
  { icon: School, link: "/admin/class", label: "Classes" },
  { icon: BookOpen, link: "/admin/exams", label: "Exams" },
  { icon: IconMoneybag, link: "/admin/fees/", label: "Fees" },
  { icon: FileText, link: "/admin/subject", label: "Subject" },
{ icon: Calendar, link: "/admin/routine", label: "Routine" },
  { icon: ClipboardCheck, link: "/admin/attendance", label: "Attendance" },
  { icon: PenTool, link: "/admin/exam", label: "Exam" },
  { icon: Bell, link: "/admin/notice", label: "Notice" },
  { icon: Bus, link: "/admin/transport", label: "Transport" },
  { icon: Building, link: "/admin/hostel", label: "Hostel" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-card border-r flex flex-col font-dmSans tracking-tight h-full overflow-y-auto no-scrollbar pb-8 z-10 shadow-xl/5">
      {/* Logo */}
      <div className="p-6 flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-950 rounded-lg flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold text-blue-950">Halal Impact</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <div key={item.label}>
            <Link
              href={item.link}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-500 ${
                pathname === item.link
                  ? "text-blue-950 bg-blue-50 font-semibold"
                  : "text-muted-foreground hover:text-blue-950 hover:bg-blue-50/50"
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
