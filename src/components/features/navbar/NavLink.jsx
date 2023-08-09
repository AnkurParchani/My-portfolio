import ResumeLink from "../../ui/ResumeLink";
import NavListLink from "./NavListLink";

export default function NavLink({ flexType }) {
  return (
    <ul
      className={`flex list-none ${flexType} gap-5 text-xl font-semibold tracking-wider sm:text-2xl md:gap-12 lg:gap-16`}
    >
      <NavListLink linkTo="section-about">About</NavListLink>
      <NavListLink linkTo="section-work">Work</NavListLink>
      <NavListLink linkTo="section-contact">Contact</NavListLink>
      <ResumeLink />
    </ul>
  );
}
