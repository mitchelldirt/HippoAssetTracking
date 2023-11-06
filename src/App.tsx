import {Button} from '@/components/ui/button.tsx';
import {Calendar} from '@/components/ui/calendar.tsx';
import Header from "@/components/ui/Header.tsx";

type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

export const payments: Payment[] = [
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
    },
]

function App() {


  return (
    <>
<Header />
        <Button>Button</Button>
      <Calendar onDayClick={() => console.log("clicked!")}  selected={new Date()} />
    </>
  )
}

export default App
