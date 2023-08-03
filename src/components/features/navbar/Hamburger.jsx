import { HiBars3, HiXMark } from "react-icons/hi2";

export default function Hamburger({ setIsOpen, isOpen }) {
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="cursor-pointer text-3xl sm:text-4xl"
    >
      {isOpen ? <HiXMark /> : <HiBars3 />}
    </div>
  );
}
