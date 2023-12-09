import {Asset, columns} from "./columns"
import {DataTable} from "../../ui/data-table.tsx"
import {Suspense, useEffect, useState} from "react";

async function getData(): Promise<Asset[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            name: "MacBook Pro",
            description: "A laptop computer",
            price: 2000,
            serial: "C02NW0KGMD6L",
            model: "MacBook Pro 15-inch 2019",
            sku: "123456789",
            image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "Hardware",
            status: "Available",
            location: "HQ",
            assigneeHistory: [
                {
                    id: "728ed52g",
                    assetId: "728ed52f",
                    assignee: "John Doe",
                    assignDate: "2021-01-01",
                    returnDate: "2021-01-03",
                },
                {
                    id: "728ed52h",
                    assetId: "728ed52f",
                    assignee: "Jane Doe",
                    assignDate: "2021-01-04",
                    returnDate: "2021-01-06",
                }
            ]
        },
        {
            id: "728ed52i",
            name: "iPhone 12",
            description: "A smartphone",
            price: 1000,
            serial: "C02NW0KGMD6L",
            model: "iPhone 12",
            sku: "123456789",
            image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "Hardware",
            status: "Available",
            location: "HQ",
            assigneeHistory: [
                {
                    id: "728ed52j",
                    assetId: "728ed52i",
                    assignee: "John Doe",
                    assignDate: "2021-01-01",
                    returnDate: "2021-01-03",
                },
                {
                    id: "728ed52k",
                    assetId: "728ed52i",
                    assignee: "Jane Doe",
                    assignDate: "2021-01-04",
                    returnDate: "2021-01-06",
                }
            ]
        }
        // ...
    ]
}

export default function AssetsTable() {
    const [data, setData] = useState<Payment[]>([]);

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
