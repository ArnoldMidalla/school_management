import Image from "next/image";
import { students } from "../data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Student() {
  // const res = await fetch("http://localhost:3000/api/students");
  // const students = await res.json();
  // console.log(students);

  // for client components
  // "use client";

  // import { useEffect, useState } from "react";

  // export default function StudentsClient() {
  //   const [students, setStudents] = useState([]);

  //   useEffect(() => {
  //     fetch("/api/students")
  //       .then(res => res.json())
  //       .then(setStudents);
  //   }, []);

  //   return (
  //     <ul>
  //       {students.map((s: any) => (
  //         <li key={s.id}>{s.name}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  //   to search for classimport { sql } from "@/lib/db";

  // export async function GET(req: Request) {
  //   const { searchParams } = new URL(req.url);
  //   const className = searchParams.get("class");

  //   const students = className
  //     ? await sql`
  //         SELECT * FROM students WHERE class_name = ${className}
  //       `
  //     : await sql`SELECT * FROM students`;

  //   return Response.json(students);
  // }

  const item = students.find((s) => s.id === id);

  return (
    <div className="flex min-h-screen border font-dmSans tracking-tight">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Page Content */}
        <main className="flex-1 p-6">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-medium text-neutral-600 dark:text-neutral-400">
                Welcome back{" "}
                <span className="text-black dark:text-white font-semibold">
                  {item?.name}
                </span>
              </h1>
              <div className="flex items-center gap-2 mt-1 text-sm">
                <span className="text-muted-foreground">Home</span>
                {/* <span className="text-muted-foreground">/</span>
                <span className="text-primary">Students</span> */}
              </div>
            </div>
            {/* <Button asChild className="border-2 font-semibold">
              <Link href={"/admin/students/add_student"} className="gap-2">
                <Plus className="w-4 h-4" />
                Add Student
              </Link>
            </Button> */}
          </div>

          {/* students Table Card */}
          <div className="bg-card min-h-70 w-70 border border-border rounded-xl flex flex-col items-center gap-4 p-4 font-medium">
            {/* <div className="overflow-hidden rounded-full size-30 relative border border-border">
              <Image
                src={item?.image || ""}
                fill
                alt=""
                className="object-cover w-full h-full"
              />
            </div> */}
            <Avatar className="overflow-hidden rounded-full size-30 border border-border">
              <AvatarImage src={item?.image} />
              <AvatarFallback>{item?.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center">
              <p className="text-lg">{item?.name}</p>
              <p className="text-neutral-600 dark:text-neutral-400">
                {item?.class}
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
