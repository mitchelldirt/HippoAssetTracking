import {
    CodeIcon,
    ComputerIcon,
    FileQuestionIcon,
    Globe2Icon,
    MapIcon,
    SettingsIcon,
    UserIcon,
    UsersIcon
} from "lucide-react";

import {sidebarListItem} from "@/components/ui/Sidebar.tsx";

export const defaultListItems: sidebarListItem[] = [
    {name: 'All assets', path: '',icon: <Globe2Icon />},
    {name: 'Software', path: '', icon: <CodeIcon />},
    {name: 'Hardware', path: '', icon: <ComputerIcon />},
    {name: 'Misc.', path: '', icon: <FileQuestionIcon />},
    {name: 'Employees', path: '', icon: <UserIcon />},
    {name: 'Departments', path: '', icon: <UsersIcon />},
    {name: 'Locations', path: '', icon: <MapIcon />},
    {name: 'Settings', path: '', icon: <SettingsIcon />}
]