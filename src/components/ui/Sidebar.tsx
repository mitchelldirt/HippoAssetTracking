import {ReactNode} from "react";

export type sidebarListItem = {
    name: string;
    path: string
    icon: ReactNode;
}

export type sidebarProps = {
    listItems: sidebarListItem[];
    visible: boolean;
}

export default function Sidebar ({listItems, visible}: sidebarProps) {
    const display = visible ? 'block' : 'hidden';
    return (
        <aside className={'w-1/4 h-full bg-gray-200' + display}>
            <div className={'w-full h-full flex flex-col items-center justify-center'}>
                {listItems.map((item, index) => {
                    return (
                        <a href={item.path} key={index} className={'w-full h-full hover:bg-gray-100 bg-gray-300 flex justify-center items-center text-left'}>
                            <p className={'text-left w-1/2 flex gap-2'}>{item.icon}{item.name}</p>
                        </a>
                    )})}
            </div>

        </aside>
    )
}