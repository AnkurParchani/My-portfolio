export default function SocialLink({ type, linkHref, fontAwesomeClass }) {
  const isEmailLink = type && type === "email";

  const link = isEmailLink ? (
    <a
      href="mailto: ankurparchani.work@gmail.com"
      className="duration-100 hover:text-gray-500"
    >
      <i className={`${fontAwesomeClass} text-4xl md:text-5xl`}></i>
    </a>
  ) : (
    <a
      target="_blank"
      rel="noreferrer"
      href={linkHref}
      className="duration-100 hover:text-gray-500"
    >
      <i className={`${fontAwesomeClass} text-4xl md:text-5xl`}></i>
    </a>
  );

  return link;
}
