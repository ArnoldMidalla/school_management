"use client";

import { useState } from "react";

import { students } from "@/app/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Bell,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Link2,
  MessageSquare,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import Link from "next/link";

export default function StudentsPage() {
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);

  const toggleStudent = (id: string) => {
    setSelectedStudents((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };
  return (
    <div className="flex min-h-screen border font-dmSans tracking-tight">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="What do you want to find?"
              className="pl-10 border-border"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg hover:bg-muted transition-colors duration-300">
              <Bell className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="p-2 rounded-lg hover:bg-muted transition-colors duration-300">
              <MessageSquare className="w-5 h-5 text-muted-foreground" />
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-border">
              <Avatar className="w-9 h-9 rounded-full overflow-hidden">
                <AvatarImage src="https://i.pravatar.cc/150?img=32" />
                <AvatarFallback>PL</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">Dorcas Midalla</p>
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
              <h1 className="text-2xl font-semibold">All Students</h1>
              <div className="flex items-center gap-2 mt-1 text-sm">
                <span className="text-muted-foreground">Home</span>
                <span className="text-muted-foreground">/</span>
                <span className="text-primary">Students</span>
              </div>
            </div>
            <Button
              asChild
              className="border-2 text-blue-950 bg-white border-blue-950 hover:bg-blue-950 hover:text-white font-semibold"
            >
              <Link href={"/admin/students/add_student"} className="gap-2">
                <Plus className="w-4 h-4" />
                Add Student
              </Link>
            </Button>
          </div>

          {/* students Table Card */}
          <div className="bg-card rounded-xl border border-border">
            {/* Table Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-lg font-semibold">Students Information</h2>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name or roll"
                    className="pl-10 w-56"
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
                      <Checkbox
                        checked={selectedStudents.length === students.length}
                        onCheckedChange={() =>
                          setSelectedStudents(
                            selectedStudents.length === students.length
                              ? []
                              : students.map((s) => s.id)
                          )
                        }
                      />
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                      Students Name
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                      Id
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                      Class
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                      Gender
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                      Parent Phone
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                      Term Avg
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr
                      key={student.id}
                      className={`border-b border-border last:border-0 transition-colors duration-300 ${
                        selectedStudents.includes(student.id)
                          ? "bg-secondary/50"
                          : "hover:bg-muted/50"
                      }`}
                    >
                      <td className="p-4">
                        <Checkbox
                          checked={selectedStudents.includes(student.id)}
                          onCheckedChange={() => toggleStudent(student.id)}
                        />
                      </td>
                      <td>
                        <Link
                          href={`/admin/students/${student.id}`}
                          className="flex items-center gap-3 hover:bg-neutral-100 w-fit py-2 px-3 rounded-md duration-300"
                        >
                          <Avatar className="w-9 h-9 rounded-full overflow-hidden">
                            <AvatarImage src={student.image} />
                            <AvatarFallback>
                              {student.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{student.name}</span>
                        </Link>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {student.id}
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {student.class}
                      </td>
                      <td className="p-4 text-sm">{student.gender}</td>
                      <td className="p-4 text-sm">{student.parent_phone}</td>
                      <td className="p-4 text-sm">{student.term_average}%</td>
                      <td>
                        <div className="flex items-center gap-2">
                          <button className="p-1.5 rounded hover:bg-muted transition-colors duration-300">
                            <Trash2 className="w-4 h-4 text-muted-foreground" />
                          </button>
                          <button className="p-1.5 rounded hover:bg-muted transition-colors duration-300">
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
              <button className="p-2 rounded-lg hover:bg-muted transition-colors duration-300">
                <ChevronLeft className="w-4 h-4 text-muted-foreground" />
              </button>
              <button className="w-8 h-8 rounded-lg text-sm bg-primary text-primary-foreground">
                1
              </button>
              <button className="w-8 h-8 rounded-lg text-sm text-muted-foreground hover:bg-muted transition-colors duration-300">
                2
              </button>
              <button className="w-8 h-8 rounded-lg text-sm text-muted-foreground hover:bg-muted transition-colors duration-300">
                3
              </button>
              <button className="w-8 h-8 rounded-lg text-sm text-muted-foreground hover:bg-muted transition-colors duration-300">
                4
              </button>
              <button className="w-8 h-8 rounded-lg text-sm text-muted-foreground hover:bg-muted transition-colors duration-300">
                5
              </button>
              <span className="text-muted-foreground">...</span>
              <button className="w-8 h-8 rounded-lg text-sm text-muted-foreground hover:bg-muted transition-colors duration-300">
                100
              </button>
              <button className="p-2 rounded-lg hover:bg-muted transition-colors duration-300">
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
