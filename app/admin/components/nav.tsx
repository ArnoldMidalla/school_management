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

export const menuItems = [
  { icon: Home, link: "/admin/", label: "Home", hasSubmenu: true },
  { icon: Users, link: "/admin/students", label: "Students", hasSubmenu: true },
  {
    icon: GraduationCap,
    link: "/admin/teachers",
    label: "Teachers",
    hasSubmenu: true,
    active: true,
    submenu: ["All Teachers", "Teachers Details"],
  },
  { icon: School, link: "/admin/classes", label: "Classes" },
  { icon: BookOpen, link: "/admin/library", label: "Library" },
  { icon: User, link: "/admin/account/", label: "Account", hasSubmenu: true },
  { icon: FileText, link: "/admin/subject", label: "Subject" },
  { icon: Calendar, link: "/admin/routine", label: "Routine" },
  { icon: ClipboardCheck, link: "/admin/attendance", label: "Attendance" },
  { icon: PenTool, link: "/admin/exam", label: "Exam", hasSubmenu: true },
  { icon: Bell, link: "/admin/notice", label: "Notice" },
  { icon: Bus, link: "/admin/transport", label: "Transport" },
  { icon: Building, link: "/admin/hostel", label: "Hostel" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-card border-r border-border flex flex-col font-dmSans tracking-tight h-full overflow-y-auto no-scrollbar pb-8 z-10">
      {/* Logo */}
      <div className="p-6 flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="text-xl font-bold text-foreground">Halal Impact</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <div key={item.label}>
            <Link
              href={item.link}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === item.link
                  ? "text-foreground bg-muted"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
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
