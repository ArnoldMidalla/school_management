import { students } from "@/app/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, ChevronDown, MessageSquare, Plus, Search } from "lucide-react";

export default async function SingleClass({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const item = students.find((s) => s.class === id);
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
              <Avatar className="w-9 h-9">
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
              <h1 className="text-2xl font-semibold">All Exams</h1>
              <div className="flex items-center gap-2 mt-1 text-sm">
                <span className="text-muted-foreground">Home</span>
                <span className="text-muted-foreground">/</span>
                <span className="text-primary">Exams</span>
              </div>
            </div>
            <Button className="gap-2 border-2 text-blue-950 bg-white border-blue-950 hover:bg-blue-950 hover:text-white font-semibold">
              <Plus className="w-4 h-4" />
              Add Exam
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
