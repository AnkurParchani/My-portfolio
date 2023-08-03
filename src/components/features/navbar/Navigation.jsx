import Logo from "../../ui/Logo";
import NavLinks from "./NavLinks";

export default function Navigation() {
  return (
    <header className=" bg-[#24c58d]">
      <nav className="relative z-10 mx-auto my-0 flex w-4/5 items-center justify-between bg-[#212529] px-4 py-2.5 lg:px-6">
        <Logo />
        <NavLinks />
      </nav>
    </header>
  );
}
