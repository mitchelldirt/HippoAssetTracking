// import {Button} from '@/components/ui/button.tsx';
// import {Calendar} from '@/components/ui/calendar.tsx';
import Header from "@/components/ui/Header.tsx";
import Footer from "@/components/ui/Footer.tsx";
import Sidebar from "@/components/ui/Sidebar.tsx";
import {defaultListItems} from "@/components/constants.tsx";
import useHippoStore from "@/store.ts";
function App() {
const displaySidebar = useHippoStore(state => state.displaySidebar);

  return (
    <>
        <Header onLogin={() => console.log('howdy')} onLogout={() => console.log('yee haw')} />
        <main className={'w-full h-full flex flex-row'}>
            <Sidebar key={'pleaseWork'} listItems={defaultListItems} />
            <div className={`bg-green-500 ${displaySidebar ? 'w-max flex-grow' : 'w-full'}`} />
        </main>
        <Footer />
    </>
  )
}

export default App
