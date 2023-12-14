// import {Button} from '@/components/ui/button.tsx';
// import {Calendar} from '@/components/ui/calendar.tsx';
import LocationsTable from "@/components/tables/locations/component.tsx";
import {Helmet} from "react-helmet-async"

function Departments() {
  return (
    <>
            <Helmet>
                <title>Locations</title>
                <meta name="description" content="All of your locations in one table :)" />
            </Helmet>
            <LocationsTable />
    </>
  )
}

export default Departments
