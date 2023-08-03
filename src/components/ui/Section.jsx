// import AOS from "aos";
// import "aos/dist/aos.css";

// AOS.init();

export default function Section({
  secClass,
  secHeading,
  secSubHeading,
  colorContent,
  children,
  secIcon,
  secColor,
}) {
  return (
    <div className="mb-20 py-20">
      <div className={`${secClass} relative mx-auto my-0 w-4/5 px-8 py-6`}>
        {/* The Icon and the Intro box */}
        <div className="absolute -left-6 -top-16 flex items-center gap-5 sm:-top-20 md:-left-8">
          <i
            className={`fa-solid ${secIcon} icon-shadow text-5xl md:text-6xl`}
          ></i>
          <h1
            className={`text-5xl font-bold tracking-wide sm:text-6xl ${secColor} md:text-7xl`}
          >
            {secHeading}
          </h1>
        </div>

        {/* Section description */}
        {secSubHeading && (
          <h3 className="mb-10 text-4xl font-semibold leading-normal tracking-wide text-gray-300 sm:text-5xl sm:leading-normal md:leading-normal lg:text-6xl lg:leading-normal">
            <span className={`${secColor}`}>{colorContent}</span>
            {secSubHeading}
          </h3>
        )}

        {/* Main contetn */}
        {children}
      </div>
    </div>
  );
}
