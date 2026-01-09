import { students } from "@/app/data";

export default async function SingleStudent({
  params,
}: {
  params: { id: string };
}) {

  const { id } = await params;
  const item = students.find((s) => s.id === (id));
  return <h1>User profile for {id} with name {item?.name}</h1>;
}
