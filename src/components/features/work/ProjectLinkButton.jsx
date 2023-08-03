export default function ProjectLinkButton({ goToProject, projectLink }) {
  return (
    <a
      href={projectLink}
      target="_blank"
      rel="noreferrer"
      className=" rounded-md bg-[#6670f6] px-3 py-2 text-xl font-semibold uppercase tracking-wider text-gray-300 transition-all  duration-200 hover:bg-slate-300 hover:text-black sm:text-2xl md:px-5 md:py-4"
    >
      {goToProject}
    </a>
  );
}
