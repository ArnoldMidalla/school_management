import { sql } from "@/lib/db";

export async function GET() {
  try {
    const students = await sql`
      SELECT *
      FROM students
      ORDER BY name
    `;

    return Response.json(students);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch students" },
      { status: 500 }
    );
  }
}
