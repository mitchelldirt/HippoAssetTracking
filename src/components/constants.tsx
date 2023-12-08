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
    {name: 'All assets', path: '/assets',icon: <Globe2Icon />},
    {name: 'Software', path: '/assets?type=software', icon: <CodeIcon />},
    {name: 'Hardware', path: '/assets?type=hardware', icon: <ComputerIcon />},
    {name: 'Misc.', path: '/assets?type=misc', icon: <FileQuestionIcon />},
    {name: 'Employees', path: '/employees', icon: <UserIcon />},
    {name: 'Departments', path: '/departments', icon: <UsersIcon />},
    {name: 'Locations', path: '/locations', icon: <MapIcon />},
    {name: 'Settings', path: '/settings', icon: <SettingsIcon />}
]