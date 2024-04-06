import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "..";
import Link from "next/link";


const navItems = [
  { path: "/about", label: "About" },
  { path: "/pricing", label: "Pricing" },
  { path: "/contact", label: "Contact" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={"/"} className="flex items-center">
        <HomeIcon size={24} className="mr-2" />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>

      {navItems.map((item) => (
        <ActiveLink path={item.path} text={item.label} key={item.path}/>
      ))}
    </nav>
  );
};
