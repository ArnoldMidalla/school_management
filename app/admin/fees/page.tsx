import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Bell, ChevronDown, MessageSquare, Plus, Search } from "lucide-react";

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
              <h1 className="text-2xl font-semibold">All Fees</h1>
              <div className="flex items-center gap-2 mt-1 text-sm">
                <span className="text-muted-foreground">Home</span>
                <span className="text-muted-foreground">/</span>
                <span className="text-primary">Fees</span>
              </div>
            </div>

            {/* select term and session dropdown */}
          </div>
        </main>
      </div>
    </div>
  );
}
