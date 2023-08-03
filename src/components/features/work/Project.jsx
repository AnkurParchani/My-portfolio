import ProjectContent from "./ProjectContent";
import ProjectLinkButton from "./ProjectLinkButton";

export default function Project({
  projectCurrentStatus,
  projectDescription,
  projectName,
  goToProject,
  projectLink,
  projectIcons,
  projectImg,
}) {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-[#111418] shadow-md shadow-[#939aff]">
      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:items-center">
        <img src={`Images/projects/${projectImg}`} className="rounded-lg " />
        <ProjectContent
          projectCurrentStatus={projectCurrentStatus}
          projectName={projectName}
          projectDescription={projectDescription}
        />
      </div>
      <div className="lg:grid lg:grid-cols-2">
        <div className="flex items-center justify-between px-6 py-9 lg:col-start-2 lg:col-end-3">
          <div className="flex w-1/12 items-center gap-2">
            {projectIcons.map((icon) => (
              <img src={`Images/icons/${icon}`} key={icon} />
            ))}
          </div>
          <ProjectLinkButton
            goToProject={goToProject}
            projectLink={projectLink}
          />
        </div>
      </div>
    </div>
  );
}
