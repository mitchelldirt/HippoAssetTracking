import {ReactNode} from "react";
import useHippoStore from "@/store.ts";

export type sidebarListItem = {
    name: string;
    path: string
    icon: ReactNode;
}

export type sidebarProps = {
    listItems: sidebarListItem[];
}

const renderListItems = (listItems: sidebarListItem[]) => {
    return listItems.map((item, index) => {
        return (
            <a href={item.path} key={index}
               className={'w-full h-full hover:bg-gray-100 bg-gray-300 flex justify-center items-center text-left'}>
                <p className={'text-left w-1/2 flex gap-2'}>{item.icon}{item.name}</p>
            </a>
        )
    });
};


export default function Sidebar({listItems}: sidebarProps) {
    const display = useHippoStore(state => state.displaySidebar);

    return (
        <aside key={'sidebar'}
               className={`w-1/4 h-full bg-gray-200 ease-in-out duration-300 ${display ? 'w-full sm:w-1/4 opacity-100' : 'w-0 opacity-0'}`}>
            <div className={'w-full h-full flex flex-col items-center justify-center'}>
                {renderListItems(listItems)}
            </div>
        </aside>
    )
}