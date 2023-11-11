import Sidebar from "@/components/ui/Sidebar.tsx";
import {defaultListItems} from "@/components/constants.tsx";
export default function SidebarStory () {
    return (
        <div className={'h-screen'}>
            <Sidebar listItems={defaultListItems} visible={true} />
        </div>
    )
}