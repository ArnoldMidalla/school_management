import { sql } from "@/lib/db";

export async function GET() {
  try {
    const teachers = await sql`
      SELECT *
      FROM teachers
      ORDER BY name
    `;

    return Response.json(teachers);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch teachers" },
      { status: 500 }
    );
  }
}
