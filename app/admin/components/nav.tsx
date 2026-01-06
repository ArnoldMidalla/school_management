"use client";

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
  ChevronDown,
  ChevronUp,
  Search,
  MessageSquare,
  Plus,
  Trash2,
  Link2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { IconHome } from "@tabler/icons-react";
import { useState } from "react";
// import { expandedMenu, setExpandedMenu } from "../page";

export const menuItems = [
  { icon: Home, homeLink:true, label: "Home", hasSubmenu: true },
  { icon: Users, label: "Students", hasSubmenu: true },
  {
    icon: GraduationCap,
    label: "Teachers",
    hasSubmenu: true,
    active: true,
    submenu: ["All Teachers", "Teachers Details"],
  },
  { icon: BookOpen, label: "Library" },
  { icon: User, label: "Account", hasSubmenu: true },
  { icon: School, label: "Class" },
  { icon: FileText, label: "Subject" },
  { icon: Calendar, label: "Routine" },
  { icon: ClipboardCheck, label: "Attendance" },
  { icon: PenTool, label: "Exam", hasSubmenu: true },
  { icon: Bell, label: "Notice" },
  { icon: Bus, label: "Transport" },
  { icon: Building, label: "Hostel" },
];

export default function Navbar() {
  // const [expandedMenu, setExpandedMenu] = useState<string>("Teachers");
  return (
    <aside className="w-64 bg-card border-r border-border flex flex-col font-dmSans tracking-tight absolute z-10">
      {/* Sidebar */}
      {/* Logo */}
      <div className="p-6 flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="text-xl font-bold text-foreground">SP!K</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <div key={item.label}>
            <Link href={item.homeLink?"/admin/":`/admin/${item.label.toLowerCase()}`}
              
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                item.active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </div>
              {/* {item.hasSubmenu &&
                (expandedMenu === item.label ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                ))} */}
            </Link>
            {/* {item.submenu && expandedMenu === item.label && (
              <div className="ml-11 mt-1 space-y-1">
                {item.submenu.map((sub, idx) => (
                  <button
                    key={sub}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      idx === 0
                        ? "bg-secondary text-secondary-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )} */}
          </div>
        ))}
      </nav>
    </aside>
  );
}
