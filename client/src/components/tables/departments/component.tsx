import {Department, columns} from "./columns"
import {DataTable} from "../../ui/data-table.tsx"
import {Suspense, useEffect, useState} from "react";

async function getData(): Promise<Department[]> {
    // Fetch data from your API here.
    return [
      {
        id: '18fx8ada82f',
        name: "Engineering",
        description: "The engineering department",
        status: "Active",
        employees: ["18fx8ada82f", "18fx8ad9sd7j2i", "18fa8d52j", "18fx8d53k"]
      },    
      { 
        id: '18fx8ada82f',
        name: "Marketing",
        description: "The marketing department",
        status: "Active",
        employees: ["18fx8ada82f", "18fx8ad9sd7j2i", "18fa8d52j", "18fx8d53k"]
      },    
      { 
        id: '18fx8ada82f',
        name: "Sales",
        description: "The sales department",
        status: "Active",
        employees: ["18fx8ada82f", "18fx8ad9sd7j2i", "18fa8d52j", "18fx8d53k"]
      },    
      { 
        id: '18fx8ada82f',
        name: "Finance",
        description: "The finance department",
        status: "Active",
        employees: ["18fx8ada82f", "18fx8ad9sd7j2i", "18fa8d52j", "18fx8d53k"]
      },    
      { 
        id: '18fx8ada82f',
        name: "Human Resources",
        description: "The human resources department",
        status: "Active",
        employees: ["18fx8ada82f", "18fx8ad9sd7j2i", "18fa8d52j", "18fx8d53k"]
      },    
      {
        id: '18fx8ada82f', 
        name: "Legal",
        description: "The legal department",
        status: "Active",
        employees: ["18fx8ada82f", "18fx8ad9sd7j2i", "18fa8d52j", "18fx8d53k"]
      },    
      { 
        id: '18fx8ada82f',
        name: "Operations",
        description: "The operations department",
        status: "Active",
        employees: ["18fx8ada82f", "18fx8ad9sd7j2i", "18fa8d52j", "18fx8d53k"]
      },    
      { 
        id: '18fx8ada82f',
        name: "Customer Support",
        description: "The customer support department",
        status: "Active",
        employees: ["18fx8ada82f", "18fx8ad9sd7j2i", "18fa8d52j", "18fx8d53k"]
      },    
      { 
        id: '18fx8ada82f',
        name: "Product",
        description: "The product department",
        status: "Inactive",
        employees: ["18fx8ada82f", "18fx8ad9sd7j", "18fa8d52j", "18fx8d53k"]
      }
    ]
}

export default function DepartmentsTable() {
    const [data, setData] = useState<Department[]>([]);

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
