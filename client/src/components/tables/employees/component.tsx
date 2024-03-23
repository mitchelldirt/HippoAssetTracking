import {Employee, columns} from "./columns"
import {DataTable} from "../../ui/data-table.tsx"
import {Suspense, useEffect, useState} from "react";

async function getData(): Promise<Employee[]> {
    // Fetch data from your API here.
    return [
        {
            id: "18fx8ada82f",
            name: "John Doe",
            email: "johndoe@email.com",
            status: "Active",
            department: "Engineering",
            location: "HQ",
            role: "Software Engineer"
        },
        {
            id: "18fx8ad9sd7j2i",
            name: "Jane Doe",
            email: "janedoe@email.com",
            status: "Active",
            department: "Engineering",
            location: "HQ",
            role: "Software Engineer"
        },
        {
            id: "18fa8d52j",
            name: "John Smith",
            email: "johnsmith@email.com",
            status: "Inactive",
            department: "Marketing",
            location: "HQ",
            role: "Marketing Manager"
        }
    ]
}

export default function EmployeesTable() {
    const [data, setData] = useState<Employee[]>([]);

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
