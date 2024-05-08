"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  icon: JSX.Element;
  path: string;
  subTitle: string;
  title: string;
}

export const SidebarMenuItem = ({ icon, path, subTitle, title }: Props) => {
  const currentPath = usePathname();
  const stylePath =
    "w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150";
  const styleCurrentLink = stylePath + " bg-blue-800";

  return (
    <Link
      href={path}
      className={currentPath === path ? styleCurrentLink : stylePath}
    >
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {subTitle}
        </span>
      </div>
    </Link>
  );
};
