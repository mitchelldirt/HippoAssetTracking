import {
    Globe2Icon,
    MapIcon,
    SettingsIcon,
    UserIcon,
    UsersIcon
} from "lucide-react";

import {sidebarListItem} from "@/components/ui/Sidebar.tsx";

export const defaultListItems: sidebarListItem[] = [
    {name: 'Assets', path: '/assets',icon: <Globe2Icon />},
    {name: 'Employees', path: '/employees', icon: <UserIcon />},
    {name: 'Departments', path: '/departments', icon: <UsersIcon />},
    {name: 'Locations', path: '/locations', icon: <MapIcon />},
    {name: 'Settings', path: '/settings', icon: <SettingsIcon />}
]