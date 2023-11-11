// import {Button} from '@/components/ui/button.tsx';
// import {Calendar} from '@/components/ui/calendar.tsx';
import Header from "@/components/ui/Header.tsx";
import Footer from "@/components/ui/Footer.tsx";

function App() {

  return (
    <>
        <Header onLogin={() => console.log('howdy')} onLogout={() => console.log('yee haw')} />
        <Footer />
    </>
  )
}

export default App
