import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export type Department = {
  id: string;
  name: string;
  description: string;
  status: "Active" | "Inactive";
  employees: string[];
};

export const columns: ColumnDef<Department>[] = [
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
