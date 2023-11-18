import {Payment, columns} from "./columns"
import {DataTable} from "./data-table"
import {Suspense, useEffect, useState} from "react";

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52g",
            amount: 75,
            status: "paid",
            email: "example@me.com",
        },
        {
            id: "728ed52h",
            amount: 30,
            status: "failed",
            email: "ohnoooo@email.com",
        }
        // ...
    ]
}

export default function DemoPage() {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            // Perform async operations, like data fetching
            const result = await getData();
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto py-10">
            <Suspense fallback={<div>Loading...</div>}>
                <DataTable columns={columns} data={data}/>
            </Suspense>
        </div>
    )
}
