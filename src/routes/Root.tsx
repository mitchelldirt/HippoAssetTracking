// import {Button} from '@/components/ui/button.tsx';
// import {Calendar} from '@/components/ui/calendar.tsx';
import Header from "@/components/ui/Header.tsx";
import Footer from "@/components/ui/Footer.tsx";
import Sidebar from "@/components/ui/Sidebar.tsx";
import {defaultListItems} from "@/components/constants.tsx";
import {Outlet} from "react-router-dom";
import {Helmet} from "react-helmet"

function App() {
  return (
    <>
        <Helmet>
            <title>Hippo Asset Tracking 🦛</title>
            <meta name="description" content="Asset tracking platform for the modern age 😎" />
            <link rel="icon" type="image/png" href="../../public/favicon.ico" />
        </Helmet>
        <Header onLogin={() => console.log('howdy')} onLogout={() => console.log('yee haw')} />
        <main className={'w-full h-full flex flex-row'}>
            <Sidebar key={'pleaseWork'} listItems={defaultListItems} />
            <Outlet />
        </main>
        <Outlet/>
        <Footer />
    </>
  )
}

export default App
