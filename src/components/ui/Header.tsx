import {HamburgerMenuIcon, GearIcon } from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button.tsx";
import useHippoStore from "@/store.ts";
import {Link} from "react-router-dom";

type User = {
    name: string;
}

interface headerProps {
    user?: User;
    onLogin: () => void;
    onLogout: () => void;
}

export default function Header(props: headerProps) {
    const updatePath = useHippoStore(state => state.updateCurrentPath)

    const handleClick = (path: string) => {
        updatePath(path);
    }

    return (
        <header className="flex items-center justify-between p-4 w-full bg-gray-200 shadow-header">
            <div className="flex items-center space-x-4 w-full">
                <div className="grid grid-cols-3 items-center w-full">
                    <HamburgerMenuIcon onClick={useHippoStore(state => state.toggleSidebar)} cursor={'pointer'} className="w-8 h-8 sm:w-10 sm:h-10" />
                    <Link onClick={() => handleClick('/')} to={'/'}>
                    <h1 className="text-sm font-extrabold text-center w-full sm:text-xl self-center ">Hippo Asset Tracking 🦛</h1>
                    </Link>
                    {props.user ? (
                        <div className={"flex gap-4 items-center justify-end"}>
                            <GearIcon cursor={'pointer'} className="w-8 h-8 sm:w-10 sm:h-10 font-bold" />
                        </div>
                    ) : (
                        <div className={"flex flex-col items-end gap-2 sm:flex-row justify-end sm:items-center"}>
                            <Button variant={'secondary'} className="text-xs sm:text-base w-20 h-8 sm:w-24 sm:h-10" onClick={props.onLogin}>Log in</Button>
                            <Button className="text-xs sm:text-base w-20 h-8 sm:w-24 sm:h-10" onClick={props.onLogout}>Sign up</Button>
                        </div>
                    )
                    }
                </div>
            </div>
        </header>
    )
}