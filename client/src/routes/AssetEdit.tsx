import type { Asset } from "@/components/tables/assets/columns"
import { useLocation } from "react-router-dom"

// Maybe use the Omit utility type instead of using the entire asset?? 🤷🏻‍♂️
export default function AssetEdit() {
    const { state } = useLocation();

    if (state satisfies Asset) {
        return (
            <dialog className="w-1/2 h-full bg-white text-black absolute left-1/2 top-1/2 border-black border-2" open>
             <p>{state.name}</p>
            </dialog>
         )
    }

    return (
        <p>Uh oh! That didn't work</p>
    )
    
}