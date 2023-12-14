// import {Button} from '@/components/ui/button.tsx';
// import {Calendar} from '@/components/ui/calendar.tsx';
import EmployeesTable from "@/components/tables/employees/component.tsx";
import {Helmet} from "react-helmet-async"

function Departments() {
  return (
    <>
            <Helmet>
                <title>Employees</title>
                <meta name="description" content="All of your employees in one table :)" />
            </Helmet>
            <EmployeesTable />
    </>
  )
}

export default Departments
