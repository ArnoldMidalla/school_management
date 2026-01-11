"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Bell, ChevronDown, MessageSquare, Plus, Search } from "lucide-react";
import { useState } from "react";

export default function AddStudent() {
  const [gender, setGender] = useState(true);
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
              <h1 className="text-2xl font-semibold">Add New Student</h1>
              <div className="flex items-center gap-2 mt-1 text-sm">
                <span className="text-muted-foreground">Home</span>
                <span className="text-muted-foreground">/</span>
                <span className="text-primary">Student</span>
              </div>
            </div>
            <Button className="gap-2 border-2 font-semibold">
              <Plus className="w-4 h-4" />
              Save
            </Button>
          </div>

          {/* main content */}
          <section className="flex gap-4 font-medium">
            {/* left */}
            <section className="flex flex-col gap-4 flex-1">
              <div className="rounded-xl bg-card border w-full p-4 flex flex-col gap-2">
                <p>Basic Information</p>
                <div className="bg-neutral-300 h-0.5 rounded-full" />
                <div className="flex flex-col gap-4 text-sm">
                    
                  <div className="flex gap-4">
                    <div className="flex flex-col gap-0.5">
                      <p>First Name</p>
                      <Input placeholder="First Name" type="First name" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p>Last Name</p>
                      <Input placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p>Gender</p>
                    <div className="flex gap-2">
                      <div className="flex gap-1">
                        <Checkbox
                          checked={gender}
                          onCheckedChange={() => setGender(true)}
                        />
                        <p>Male</p>
                      </div>
                      <div className="flex gap-1">
                        <Checkbox
                          checked={!gender}
                          onCheckedChange={() => setGender(false)}
                        />
                        <p>Female</p>
                      </div>
                    </div>
                  </div>
                  {/* right */}
                </div>
              </div>
              <div className="rounded-xl bg-card border w-full p-4 flex flex-col gap-2">
                <p>Parent Details</p>
                <div className="bg-neutral-300 h-0.5 rounded-full" />
                <div className="flex gap-4 text-sm">
                  {/* left */}
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-0.5">
                      <p>Fathers Name</p>
                      <Input placeholder="Fathers Name" type="Fathers Name" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p>Fathers Contact</p>
                      <Input placeholder="Fathers Contact" type="Phone" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p>Fathers Occupation</p>
                      <Input
                        placeholder="Fathers Occupation"
                        type="Fathers Occupation"
                      />
                    </div>
                  </div>
                  {/* right */}
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-0.5">
                      <p>Mothers Name</p>
                      <Input placeholder="Mothers Name" type="Mothers Name" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p>Mothers Contact</p>
                      <Input placeholder="Mothers Contact" type="Phone" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p>Annual Income</p>
                      <Input placeholder="Annual Income" type="Number" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* right */}
            <section className="flex flex-col gap-4 flex-1">
              <div className="rounded-xl bg-card border w-full p-4 flex flex-col gap-2">
                <p>Login/Account Details</p>
                <div className="bg-neutral-300 h-0.5 rounded-full" />
                <div className="flex gap-4 text-sm">
                  <div className="flex flex-col gap-0.5">
                    <p>User Name</p>
                    <Input placeholder="User Name" type="User Name" />
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <p>Password</p>
                    <Input placeholder="Password" type="Password" />
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-card border w-full p-4 flex flex-col gap-2">
                <p>Contact Information</p>
                <div className="bg-neutral-300 h-0.5 rounded-full" />
                <div className="flex flex-col gap-4 text-sm">
                  <div className="flex gap-4">
                    <div className="flex flex-col gap-0.5">
                      <p>Phone</p>
                      <Input placeholder="Contact Number" type="Phone" />
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <p>Email</p>
                      <Input placeholder="example@gmail.com" type="email" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <p>Address</p>
                    <Input placeholder="Address" type="address" />
                  </div>
                </div>
              </div>
            </section>
          </section>
        </main>
      </div>
    </div>
  );
}
