import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, ChevronDown, MessageSquare, Plus, Search } from "lucide-react";
import { students, teachers } from "../data";
import Link from "next/link";

export default function AdminPage() {
  const m = students.find((s) => s.gender === "Male");
  const f = students.find((s) => s.gender === "Female");
  return (
    <div className="flex min-h-screen border font-dmSans tracking-tight">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Page Content */}
        <main className="flex-1 p-6">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold">Dashboard</h1>
              <div className="flex items-center gap-2 mt-1 text-sm">
                <span className="text-muted-foreground">Home</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap text-blue-950">
            <div className="border-[1.5] border-blue-950 p-4 rounded-xl shadow-lg/5 flex flex-col w-36 bg-blue-50/40">
              <p className="text-sm">Total Students</p>
              <p className="text-2xl font-semibold">{students.length}</p>
            </div>
            <div className="border-[1.5] border-blue-950 p-4 rounded-xl shadow-lg/5 flex flex-col w-36 bg-blue-50/40">
              <p className="text-sm">Total Staff</p>
              <p className="text-2xl font-semibold">{teachers.length}</p>
            </div>
            <div className="border-[1.5] border-blue-950 p-4 rounded-xl shadow-lg/5 flex flex-col w-36 bg-blue-50/40">
              <p className="text-sm text-green-800">New Students</p>
              <p className="text-2xl font-semibold">5</p>
            </div>
            <div className="border-[1.5] border-blue-950 p-4 rounded-xl shadow-lg/5 flex flex-col w-36 bg-blue-50/40">
              <p className="text-sm">Male Students</p>
              <p className="text-2xl font-semibold">{m?.gender.length}</p>
            </div>
            <div className="border-[1.5] border-blue-950 p-4 rounded-xl shadow-lg/5 flex flex-col w-36 bg-blue-50/40">
              <p className="text-sm">Female Students</p>
              <p className="text-2xl font-semibold">{f?.gender.length}</p>
            </div>
            <Link href={"/admin/fees"} className="border-[1.5] border-blue-950 p-4 rounded-xl shadow-lg/5 flex flex-col w-36 bg-green-50/40">
              <p className="text-sm">Fees paid</p>
              <p className="text-2xl font-semibold text-green-800">N90,000</p>
            </Link>
            <Link href={"/admin/fees"} className="border-[1.5] border-blue-950 p-4 rounded-xl shadow-lg/5 flex flex-col w-36 bg-red-50/40">
              <p className="text-sm">Fees Outstanding</p>
              <p className="text-2xl font-semibold text-red-800">N60,000</p>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
