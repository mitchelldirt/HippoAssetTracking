import {Location, columns} from "./columns"
import {DataTable} from "../../ui/data-table.tsx"
import {Suspense, useEffect, useState} from "react";

async function getData(): Promise<Location[]> {
    // Fetch data from your API here.
    return [
        {
            id: "18fx8ada82f",
            name: "HQ",
            status: "Active",
            address: "123 Main St",
        },
        {
            id: "18fx8ad9sd7j2i",
            name: "NYC",
            status: "Active",
            address: "123 Main St",
        },
        {
            id: "18fa8d52j",
            name: "LA",
            status: "Active",
            address: "123 Main St",
        }
    ]
}

export default function LocationsTable() {
    const [data, setData] = useState<Location[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            // Perform async operations, like data fetching
            const result = await getData();
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <div className="w-full container mx-auto py-10">
            <Suspense fallback={<div>Loading...</div>}>
                <DataTable columns={columns} data={data}/>
            </Suspense>
        </div>
    )
}
