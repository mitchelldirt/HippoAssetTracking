import {HamburgerMenuIcon, GearIcon } from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button.tsx";

type User = {
    name: string;
}

interface headerProps {
    user?: User;
    onLogin: () => void;
    onLogout: () => void;
}

export default function Header(props: headerProps) {

    return (
        <header className="flex items-center justify-between p-4 w-full">
            <div className="flex items-center space-x-4 w-full">
                <div className="flex items-center space-x-4 w-full justify-between">
                    <HamburgerMenuIcon cursor={'pointer'} className="w-8 h-8 sm:w-12 sm:h-12 md:hidden" />
                    <h1 className="text-sm font-extrabold text-center w-full sm:text-xl ">Hippo Asset Tracking</h1>
                    {props.user ? (
                        <div className={"flex gap-4 items-center "}>
                            <GearIcon cursor={'pointer'} className="w-8 h-8 sm:w-12 sm:h-12 font-bold" />
                        </div>
                    ) : (
                        <div className={"flex flex-col gap-2 sm:flex-row"}>
                            <Button variant={'secondary'} className="text-xs sm:text-base w-20 h-8 sm:w-24 sm:h-12" onClick={props.onLogin}>Log in</Button>
                            <Button className="text-xs sm:text-base w-20 h-8 sm:w-24 sm:h-12" onClick={props.onLogout}>Sign up</Button>
                        </div>
                    )
                    }
                </div>
            </div>
        </header>
    )
}