import { ReactNode } from "react";
import useHippoStore from "@/store.ts";
import {Link} from "react-router-dom";

export type sidebarListItem = {
  name: string;
  path: string;
  icon: ReactNode;
};

export type sidebarProps = {
  listItems: sidebarListItem[];
};

const renderListItems = (listItems: sidebarListItem[]) => {
  return listItems.map((item, index) => {
    return (
      <Link
        to={item.path}
        key={index}
        className={
          `w-full h-full hover:bg-gray-100 flex justify-center items-center text-left ${document.location.pathname.concat(document.location.search) === item.path ? 'bg-gray-100' : 'bg-gray-300'}`
        }
      >
        <p className={"text-left w-1/2 flex gap-2"}>
          {item.icon}
          {item.name}
        </p>
      </Link>
    );
  });
};

export default function Sidebar({ listItems }: sidebarProps) {
  const display = useHippoStore((state) => state.displaySidebar);

  return (
    <aside
      key={"sidebar"}
      className={`h-full ease-in-out duration-300 ${
        display ? "w-full sm:w-1/5 opacity-100" : "w-0 opacity-0"
      }`}
    >
      <div
        className={"w-full h-full flex flex-col items-center justify-center"}
      >
        {renderListItems(listItems)}
      </div>
    </aside>
  );
}
