import Sidebar from "@/components/ui/Sidebar.tsx";
import {defaultListItems} from "@/components/constants.tsx";
import useHippoStore from "@/store.ts";
export default function SidebarStory () {
    return (
        <div className={'h-screen'}>
            <button onClick={useHippoStore.getState().toggleSidebar}>Toggle Sidebar</button>
            <Sidebar listItems={defaultListItems} />
        </div>
    )
}