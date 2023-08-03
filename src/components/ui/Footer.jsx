import SocialLink from "./SocialLink";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col gap-10 bg-[#252525] pb-2 pt-6 text-center">
      <div className="flex items-center justify-center gap-10 md:gap-14">
        <SocialLink
          linkHref="https://www.instagram.com/ankurparchani/"
          fontAwesomeClass="fa-brands fa-instagram"
        />
        <SocialLink
          linkHref="https://github.com/AnkurParchani"
          fontAwesomeClass="fa-brands fa-github"
        />
        <SocialLink
          linkHref="https://in.linkedin.com/in/ankur-parchani-267b2b20a?trk=people-guest_people_search-card"
          fontAwesomeClass="fa-brands fa-linkedin"
        />
        <SocialLink
          type="email"
          linkHref="#"
          fontAwesomeClass="fa-regular fa-envelope"
        />
        <SocialLink
          linkHref="https://discordapp.com/users/AnkurParchani#2457"
          fontAwesomeClass="fa-brands fa-discord"
        />
      </div>
      <p className="text-md font-normal tracking-widest text-gray-300 ">
        Copyright &copy; {currentYear} Ankur Parchani
      </p>
    </div>
  );
}
