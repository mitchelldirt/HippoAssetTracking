// import {Button} from '@/components/ui/button.tsx';
// import {Calendar} from '@/components/ui/calendar.tsx';
import DemoPage from "@/components/tables/assets/component.tsx";
import {Helmet} from "react-helmet"

function App() {
  return (
    <>
            <Helmet>
                <title>All Assets</title>
                <meta name="description" content="All of your assets in one table :)" />
            </Helmet>
            <DemoPage />
    </>
  )
}

export default App
