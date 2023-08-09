export default function Headline({ line, headlineClass }) {
  return (
    <div className="mx-auto my-0 mb-10 w-10/12 sm:mb-14 md:w-4/5">
      <h2
        className={`${headlineClass} text-5xl font-normal italic tracking-tight sm:text-6xl lg:text-7xl`}
      >
        {line}
      </h2>
    </div>
  );
}
