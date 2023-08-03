export default function ProjectContent({
  projectName,
  projectCurrentStatus,
  projectDescription,
}) {
  const deployedClass = projectCurrentStatus === "DEPLOYED";

  return (
    <div className="flex flex-col items-center gap-3 px-6 text-gray-300 ">
      <p className="projectName-shadow -mb-2 text-4xl font-semibold leading-normal tracking-wide sm:text-4xl md:mb-0 md:text-5xl">
        {projectName}
      </p>
      <p
        className={`text-md mb-3 font-bold leading-snug tracking-widest ${
          deployedClass ? "text-green-500" : "animate-blinking text-red-500"
        } md:text-xl`}
      >
        ({projectCurrentStatus})
      </p>
      <p className="text-2xl font-normal leading-relaxed tracking-wider md:text-3xl md:leading-loose md:tracking-wide">
        {projectDescription}
      </p>
    </div>
  );
}
