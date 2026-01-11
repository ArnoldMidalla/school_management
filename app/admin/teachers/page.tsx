"use client";

import { useState } from "react";
import {
  Calendar,
  ChevronDown,
  Search,
  Plus,
  Trash2,
  Link2,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { teachers } from "@/app/data";

export default function Index() {
  const [selectedTeachers, setSelectedTeachers] = useState<string[]>([]);

  const toggleTeacher = (id: string) => {
    setSelectedTeachers((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex min-h-screen border font-dmSans tracking-tight">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Page Content */}
        <main className="flex-1 p-6">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold">
                All Teachers
              </h1>
              <div className="flex items-center gap-2 mt-1 text-sm">
                <span className="text-muted-foreground">Home</span>
                <span className="text-muted-foreground">/</span>
                <span className="text-primary">Teachers</span>
              </div>
            </div>
            <Button className="gap-2 border-2 font-semibold">
              <Plus className="w-4 h-4" />
              Add Teacher
            </Button>
          </div>

          {/* Teachers Table Card */}
          <div className="bg-card rounded-xl border border-border">
            {/* Table Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-lg font-semibold">
                Teachers Information
              </h2>
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
                        checked={selectedTeachers.length === teachers.length}
                        onCheckedChange={() =>
                          setSelectedTeachers(
                            selectedTeachers.length === teachers.length
                              ? []
                              : teachers.map((t) => t.id)
                          )
                        }
                      />
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                      Teachers Name
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                      Id
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                      Address
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
                      className={`border-b border-border last:border-0 transition-colors duration-300 ${
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
                      <td>
                        <Link
                          href={`/admin/teachers/${teacher.id}`}
                          className="flex items-center gap-3 hover:bg-neutral-100 dark:hover:bg-neutral-700 w-fit py-2 px-3 rounded-md duration-300"
                        >
                          <Avatar className="w-9 h-9 rounded-full overflow-hidden">
                            <AvatarImage src={teacher.avatar} />
                            <AvatarFallback>
                              {teacher.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">
                            {teacher.name}
                          </span>
                        </Link>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {teacher.id}
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {teacher.address}
                      </td>
                      <td className="p-4 text-sm">
                        {teacher.subject}
                      </td>
                      <td className="p-4 text-sm">
                        {teacher.gender}
                      </td>
                      <td className="p-4 text-sm">
                        {teacher.phone}
                      </td>
                      <td className="p-4">
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
            <div className="flex items-center justify-center gap-2 p-4 border-t border-border font-medium">
              {/* <button className="p-2 rounded-lg hover:bg-muted transition-colors duration-300">
                <ChevronLeft className="w-4 h-4 text-muted-foreground" />
              </button> */}
              <button className="w-8 h-8 rounded-lg text-sm bg-blue-950 dark:bg-blue-100 text-white dark:text-black transition-colors duration-300 font-semibold">
                1
              </button>
              <button className="w-8 h-8 rounded-lg text-sm text-muted-foreground hover:bg-muted transition-colors duration-300">
                2
              </button>
              <button className="w-8 h-8 rounded-lg text-sm text-muted-foreground hover:bg-muted transition-colors duration-300">
                3
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
