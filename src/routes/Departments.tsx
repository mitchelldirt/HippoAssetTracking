// import {Button} from '@/components/ui/button.tsx';
// import {Calendar} from '@/components/ui/calendar.tsx';
import DepartmentsTable from "@/components/tables/departments/component.tsx";
import {Helmet} from "react-helmet-async"

function Departments() {
  return (
    <>
            <Helmet>
                <title>Departments</title>
                <meta name="description" content="All of your departments in one table :)" />
            </Helmet>
            <DepartmentsTable />
    </>
  )
}

export default Departments
