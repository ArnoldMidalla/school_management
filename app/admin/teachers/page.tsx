"use client";

import { useState } from "react";
import {
  Trash2,
  Search,
  Bell,
  MessageSquare,
  Calendar,
  ChevronDown,
  Link2,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const teachers = [
  {
    id: "#0021",
    name: "Floyd Miles",
    avatar: "https://i.pravatar.cc/150?img=1",
    address: "TA-107 Newyork",
    subject: "Mathematics",
    class: "01",
    phone: "+123 9988568",
  },
  {
    id: "#0011",
    name: "Jane Cooper",
    avatar: "https://i.pravatar.cc/150?img=2",
    address: "Australia, Sydney",
    subject: "English",
    class: "02",
    phone: "+123 7988566",
  },
  {
    id: "#0031",
    name: "Jenny Wilson",
    avatar: "https://i.pravatar.cc/150?img=3",
    address: "TA-107 Newyork",
    subject: "Physics",
    class: "03",
    phone: "+123 7988567",
  },
  {
    id: "#0022",
    name: "Annette Black",
    avatar: "https://i.pravatar.cc/150?img=4",
    address: "Australia, Sydney",
    subject: "Literature",
    class: "04",
    phone: "+123 5988565",
  },
  {
    id: "#0013",
    name: "Arlene McCoy",
    avatar: "https://i.pravatar.cc/150?img=5",
    address: "TA-107 Newyork",
    subject: "Mathematics",
    class: "04",
    phone: "+123 4948564",
  },
  {
    id: "#0014",
    name: "Robert Fox",
    avatar: "https://i.pravatar.cc/150?img=6",
    address: "TA-107 Newyork",
    subject: "English",
    class: "03",
    phone: "+123 3983563",
  },
  {
    id: "#0018",
    name: "Arlene McCoy",
    avatar: "https://i.pravatar.cc/150?img=7",
    address: "Australia, Sydney",
    subject: "Physics",
    class: "01",
    phone: "+123 4988555",
  },
  {
    id: "#0017",
    name: "Albert Flores",
    avatar: "https://i.pravatar.cc/150?img=8",
    address: "TA-107 Newyork",
    subject: "Mathematics",
    class: "01",
    phone: "+123 6988566",
  },
  {
    id: "#0019",
    name: "Devon Lane",
    avatar: "https://i.pravatar.cc/150?img=9",
    address: "Australia, Sydney",
    subject: "Literature",
    class: "02",
    phone: "+123 9988568",
  },
];

export default function Index() {
  const [selectedTeachers, setSelectedTeachers] = useState<string[]>([
    "#0031",
    "#0018",
  ]);

  const toggleTeacher = (id: string) => {
    setSelectedTeachers((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex min-h-screen bg-background flex-1">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="What do you want to find?"
              className="pl-10 bg-background border-border"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg hover:bg-muted transition-colors">
              <Bell className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="p-2 rounded-lg hover:bg-muted transition-colors">
              <MessageSquare className="w-5 h-5 text-muted-foreground" />
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-border">
              <Avatar className="w-9 h-9">
                <AvatarImage src="https://i.pravatar.cc/150?img=32" />
                <AvatarFallback>PL</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium text-foreground">Priscilla Lily</p>
                <p className="text-xs text-muted-foreground">Admin</p>
              </div>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">
                All Teachers
              </h1>
              <div className="flex items-center gap-2 mt-1 text-sm">
                <span className="text-muted-foreground">Home</span>
                <span className="text-muted-foreground">/</span>
                <span className="text-primary">Teachers</span>
              </div>
            </div>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Add Teacher
            </Button>
          </div>

          {/* Teachers Table Card */}
          <div className="bg-card rounded-xl border border-border">
            {/* Table Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">
                Teachers Information
              </h2>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name or roll"
                    className="pl-10 w-56 bg-background"
                  />
                </div>
                <Button variant="outline" className="gap-2">
                  <Calendar className="w-4 h-4" />
                  Last 30 days
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 text-left">
                      <Checkbox />
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                      Teachers Name
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                      Address
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                      Id
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                      Subject
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                      Class
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                      Phone
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((teacher) => (
                    <tr
                      key={teacher.id}
                      className={`border-b border-border last:border-0 transition-colors ${
                        selectedTeachers.includes(teacher.id)
                          ? "bg-secondary/50"
                          : "hover:bg-muted/50"
                      }`}
                    >
                      <td className="p-4">
                        <Checkbox
                          checked={selectedTeachers.includes(teacher.id)}
                          onCheckedChange={() => toggleTeacher(teacher.id)}
                        />
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-9 h-9">
                            <AvatarImage src={teacher.avatar} />
                            <AvatarFallback>
                              {teacher.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium text-foreground">
                            {teacher.name}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {teacher.address}
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {teacher.id}
                      </td>
                      <td className="p-4 text-sm text-foreground">
                        {teacher.subject}
                      </td>
                      <td className="p-4 text-sm text-foreground">
                        {teacher.class}
                      </td>
                      <td className="p-4 text-sm text-foreground">
                        {teacher.phone}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <button className="p-1.5 rounded hover:bg-muted transition-colors">
                            <Trash2 className="w-4 h-4 text-muted-foreground" />
                          </button>
                          <button className="p-1.5 rounded hover:bg-muted transition-colors">
                            <Link2 className="w-4 h-4 text-muted-foreground" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 p-4 border-t border-border">
              <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                <ChevronLeft className="w-4 h-4 text-muted-foreground" />
              </button>
              <button className="w-8 h-8 rounded-lg text-sm text-muted-foreground hover:bg-muted transition-colors">
                1
              </button>
              <button className="w-8 h-8 rounded-lg text-sm bg-primary text-primary-foreground">
                2
              </button>
              <button className="w-8 h-8 rounded-lg text-sm text-muted-foreground hover:bg-muted transition-colors">
                3
              </button>
              <button className="w-8 h-8 rounded-lg text-sm text-muted-foreground hover:bg-muted transition-colors">
                4
              </button>
              <button className="w-8 h-8 rounded-lg text-sm text-muted-foreground hover:bg-muted transition-colors">
                5
              </button>
              <span className="text-muted-foreground">...</span>
              <button className="w-8 h-8 rounded-lg text-sm text-muted-foreground hover:bg-muted transition-colors">
                100
              </button>
              <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
              <Button variant="outline" size="sm" className="ml-4 gap-1">
                10 / page
                <ChevronDown className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
