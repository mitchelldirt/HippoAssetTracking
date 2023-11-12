import {ReactNode, useState, useEffect, useRef} from "react";
import useHippoStore from "@/store.ts";

export type sidebarListItem = {
    name: string;
    path: string
    icon: ReactNode;
}

export type sidebarProps = {
    listItems: sidebarListItem[];
}

export default function Sidebar({listItems}: sidebarProps) {
    const [animating, setAnimating] = useState(false);

    const displayRef = useRef(useHippoStore(state => state.displaySidebar));
    const display = useHippoStore(state => state.displaySidebar);
    const toggled = useHippoStore(state => state.sidebarToggled);

    useEffect(() => {
        if (displayRef.current !== display) {
            setAnimating(true);
        }
    }, [display])


    return (
        animating ?
            <aside
                className={'w-1/4 h-full bg-gray-200 ' + `${display ? 'animate-sidebar-open' : 'animate-sidebar-close'}`}>
                <div className={'w-full h-full flex flex-col items-center justify-center'}>
                    {listItems.map((item, index) => {
                        return (
                            <a href={item.path} key={index}
                               className={'w-full h-full hover:bg-gray-100 bg-gray-300 flex justify-center items-center text-left'}>
                                <p className={'text-left w-1/2 flex gap-2'}>{item.icon}{item.name}</p>
                            </a>
                        )
                    })}
                </div>
            </aside>

            :

            toggled ?
                <aside
                    className={'w-1/4 h-full bg-gray-200 ' + `${display ? 'opacity-100' : 'hidden opacity-0'}`}>
                    <div className={'w-full h-full flex flex-col items-center justify-center'}>
                        {listItems.map((item, index) => {
                            return (
                                <a href={item.path} key={index}
                                   className={'w-full h-full hover:bg-gray-100 bg-gray-300 flex justify-center items-center text-left'}>
                                    <p className={'text-left w-1/2 flex gap-2'}>{item.icon}{item.name}</p>
                                </a>
                            )
                        })}
                    </div>
                </aside>


                :

                <aside
                    className={'w-1/4 h-full bg-gray-200 hidden opacity-0 sm:block sm:opacity-100'}>
                    <div className={'w-full h-full flex flex-col items-center justify-center'}>
                        {listItems.map((item, index) => {
                            return (
                                <a href={item.path} key={index}
                                   className={'w-full h-full hover:bg-gray-100 bg-gray-300 flex justify-center items-center text-left'}>
                                    <p className={'text-left w-1/2 flex gap-2'}>{item.icon}{item.name}</p>
                                </a>
                            )
                        })}
                    </div>
                </aside>
    )
}