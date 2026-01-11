import { Bell, ChevronDown, MessageSquare, Search } from "lucide-react";
import Navbar from "./components/nav";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
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
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
