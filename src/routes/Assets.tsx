// import {Button} from '@/components/ui/button.tsx';
// import {Calendar} from '@/components/ui/calendar.tsx';
import AssetsTable from "@/components/tables/assets/component.tsx";
import {Helmet} from "react-helmet-async"

function App() {
  return (
    <>
            <Helmet>
                <title>All Assets</title>
                <meta name="description" content="All of your assets in one table :)" />
            </Helmet>
            <AssetsTable />
    </>
  )
}

export default App
