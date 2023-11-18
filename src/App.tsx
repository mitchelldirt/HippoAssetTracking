// import {Button} from '@/components/ui/button.tsx';
// import {Calendar} from '@/components/ui/calendar.tsx';
import Header from "@/components/ui/Header.tsx";
import Footer from "@/components/ui/Footer.tsx";
import Sidebar from "@/components/ui/Sidebar.tsx";
import {defaultListItems} from "@/components/constants.tsx";
import DemoPage from "@/components/tables/payments/component.tsx";

function App() {
  return (
    <>
        <Header onLogin={() => console.log('howdy')} onLogout={() => console.log('yee haw')} />
        <main className={'w-full h-full flex flex-row'}>
            <Sidebar key={'pleaseWork'} listItems={defaultListItems} />
            <DemoPage />
        </main>
        <Footer />
    </>
  )
}

export default App
