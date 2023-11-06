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
                    <HamburgerMenuIcon cursor={'pointer'} className="w-6 h-6" />
                    <h1 className="text-2xl font-bold text-center">Hippo Asset Tracking</h1>
                    {props.user ? (
                        <div className={"flex gap-5 items-center"}>
                            <Button variant={'ghost'}><GearIcon className="w-8 h-8 font-bold" /></Button>
                            <Button className="btn btn-sm" onClick={props.onLogout}>Log out</Button>
                        </div>
                    ) : (
                        <div className={"flex gap-5"}>
                            <Button variant={'secondary'} className="btn btn-sm" onClick={props.onLogin}>Log in</Button>
                            <Button className="btn btn-sm btn-primary" onClick={props.onLogout}>Sign up</Button>
                        </div>
                    )
                    }
                </div>
            </div>
        </header>
    )
}