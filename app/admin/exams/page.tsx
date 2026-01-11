import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Exams() {
  return (
    <div className="flex min-h-screen border font-dmSans tracking-tight">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
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
            <Button className="gap-2 border-2 font-semibold">
              <Plus className="w-4 h-4" />
              Add Exam
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
