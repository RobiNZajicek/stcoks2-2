import React from "react";
import Search from "./Search";
import ThemeIcon from "./ThemeIcon";
//types for variables
interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <div className="flex items-start flex-col">
      <div className="2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          {name}
        </h1>
      </div>
      <div className="flex items-center w-full relative">
        <Search />
        <ThemeIcon />
      </div>
    </div>
  );
};

export default Header;
