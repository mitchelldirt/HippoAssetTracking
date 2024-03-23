import { ReactNode } from "react";
import useHippoStore from "@/store.ts";
import { Link } from "react-router-dom";

export type sidebarListItem = {
  name: string;
  path: string;
  icon: ReactNode;
};

export type sidebarProps = {
  listItems: sidebarListItem[];
};

const renderListItems = (
  listItems: sidebarListItem[],
  display: boolean,
  currentPath: string
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const updateCurrentPath = useHippoStore((state) => state.updateCurrentPath);

  const handleClick = (path: string) => {
    updateCurrentPath(path);
  };

  return listItems.map((item, index) => {


    return (
      <Link
        to={item.path}
        key={index}
        onClick={() => handleClick(item.path)}
        className={`w-full h-full px-5 hover:bg-gray-100 flex justify-center items-center text-left ease-in-out duration-300 ${currentPath === item.path ? "bg-gray-100" : "bg-gray-300"
          } ${display ? "opacity-100" : "opacity-0"}`}
      >
        <p
          className={`text-left w-full flex gap-2 justify-start ${display ? "opacity-100" : "opacity-0"
            }`}
        >
          {item.icon}
          {item.name}
        </p>
      </Link>
    );
  });
};

export default function Sidebar({ listItems }: sidebarProps) {
  const display = useHippoStore((state) => state.displaySidebar);
  const currentPath = useHippoStore((state) => state.currentPath);

  return (
    <aside
      key={"sidebar"}
      className={` h-screen ease-in-out duration-700 bg-gray-300 ${display ? "w-full sm:w-fit opacity-100" : "w-0 opacity-0"
        }`}
    >
      <div
        className={"w-full h-full flex flex-col items-center justify-center"}
      >
        {renderListItems(listItems, display, currentPath)}
      </div>
    </aside>
  );
}
