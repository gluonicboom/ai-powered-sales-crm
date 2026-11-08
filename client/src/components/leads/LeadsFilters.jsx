import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu, 
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
 } from "@/components/ui/dropdown-menu";

  import { Button } from "@/components/ui/button";

function LeadsFilters() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Statuses")

  return (
    <div className="mt-6 flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
        <Input
            placeholder="Search leads by name or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-sm"
        />
      <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">
      {status}
    </Button>
  </DropdownMenuTrigger>

  <DropdownMenuContent>
      {["New", "Contacted", "Qualified", "Converted", "Lost"].map((item) =>

    (
    <DropdownMenuItem 
    key = {item}
    onClick = {() => setStatus(item)}
    >
      {item}
    </DropdownMenuItem> )
      )
       }

  </DropdownMenuContent>
</DropdownMenu>

    </div>
  );
}

export default LeadsFilters;