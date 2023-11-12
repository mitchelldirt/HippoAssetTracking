// import {Button} from '@/components/ui/button.tsx';
// import {Calendar} from '@/components/ui/calendar.tsx';
import Header from "@/components/ui/Header.tsx";
import Footer from "@/components/ui/Footer.tsx";
import Sidebar from "@/components/ui/Sidebar.tsx";
import {defaultListItems} from "@/components/constants.tsx";

function App() {

  return (
    <>
        <Header onLogin={() => console.log('howdy')} onLogout={() => console.log('yee haw')} />
        <main className={'w-full h-full'}>
            <Sidebar listItems={defaultListItems} />
        </main>
        <Footer />
    </>
  )
}

export default App
