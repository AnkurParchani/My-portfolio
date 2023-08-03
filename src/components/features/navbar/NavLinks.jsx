import { useState } from "react";
import Hamburger from "./Hamburger";
import NavLink from "./NavLink";

export default function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* If the screen is below  768px*/}
      <div className="block md:hidden">
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        {isOpen && (
          <div className="absolute left-0 mt-2 w-full animate-animation-opacity bg-[#212529] px-3 py-3">
            <NavLink flexType="flex-col" />
          </div>
        )}
      </div>

      {/* If the screen is above 768px */}
      <div className="hidden md:block">
        <NavLink flexType="flex-row" />
      </div>
    </>
  );
}
