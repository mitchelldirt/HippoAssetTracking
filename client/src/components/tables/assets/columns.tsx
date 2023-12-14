import {ColumnDef} from "@tanstack/react-table";
import {MoreHorizontal} from "lucide-react"

import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export type Assignment = {
    id: string;
    assetId: string;
    assignee: string;
    assignDate: string;
    returnDate: string;
}

export type Asset = {
    id: string;
    name: string;
    description: string;
    price: number;
    serial: string;
    model: string;
    sku: string;
    image: string;
    category: "Software" | "Hardware" | "Other";
    status: "Available" | "Unavailable" | "Damaged" | "Lost" | "Stolen" | "In Repair" | "In Use";
    location: string;
    assigneeHistory: Assignment[];
}

export const columns: ColumnDef<Payment>[] = [
    {
        id: "actions",
        cell: ({row}) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.id)}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
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
        accessorKey: "price",
        header: "Price",
    },
    {
        accessorKey: "serial",
        header: "Serial",
    },
    {
        accessorKey: "model",
        header: "Model",
    },
    {
        accessorKey: "sku",
        header: "SKU",
    },
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "location",
        header: "Location",
    },
    {
        accessorKey: "image",
        header: "Image",
        cell: ({row}) => {
            const asset = row.original

            return (
                <img
                    src={asset.image}
                    alt={asset.name}
                    className="h-14 w-14"
                />
            )
        }
    },
    // Leaving this here as an example for now
    // {
    //     accessorKey: "amount",
    //     header: () => <div className="text-right">Amount</div>,
    //     cell: ({row}) => {
    //         const amount = parseFloat(row.getValue("amount"))
    //         const formatted = new Intl.NumberFormat("en-US", {
    //             style: "currency",
    //             currency: "USD",
    //         }).format(amount)

    //         return <div className="text-right font-medium">{formatted}</div>
    //     },
    // },
]