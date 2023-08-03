import { Link } from "react-scroll";

export default function NavListLink({ children, linkTo }) {
  return (
    <li className=" text-[#ccc]">
      <Link
        activeClass="active"
        to={linkTo}
        spy={true}
        smooth={true}
        className="cursor-pointer duration-100 hover:text-[#24c58d]"
        duration={1000}
        offset={-120}
      >
        {children}
      </Link>
    </li>
  );
}
