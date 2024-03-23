import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Department = {
  id: string;
  name: string;
  description: string;
  status: "Active" | "Inactive";
  employees: string[];
};

export const columns: ColumnDef<Department>[] = [
  {
    id: "actions",
    cell: ({row}) => {
      const department = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              <Link state='edit' to={`/departments/${department.id}`}>Edit Department</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link state='clone' to={`/departments/${department.id}`}>Clone Department</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    id: "employees",
    cell: ({ row }) => {
      return (
        <Link className="w-28" to={`/employees?department=${row.original.id}`}>
          <Button variant="ghost" className="h-8 w-28 p-0">
            <span className="w-28">View Employees</span>
          </Button>
        </Link>
      );
    },
  },
];
