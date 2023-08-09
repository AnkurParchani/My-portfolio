const stack = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Javascript",
  "React",
  "Redux",
  "React query",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "Git",
];

function StackListItem() {
  return (
    <ul className="grid list-none grid-cols-2 gap-5 font-bold tracking-wider text-gray-300 md:w-4/5 md:gap-7 lg:w-3/5">
      {stack.map((item) => (
        <li
          className="cursor-pointer text-lg duration-100 before:mr-1 before:text-[#ffa28b] before:content-['▹'] hover:text-[#ffa28b] sm:text-xl md:text-2xl "
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function TechStack() {
  return (
    <div className="border-t-2 border-gray-600 pt-8 sm:pt-12 md:pt-16">
      <h2 className="mb-8 text-2xl font-semibold  leading-relaxed tracking-wide text-gray-300 sm:mb-10 sm:text-4xl lg:text-5xl">
        <span className="text-[#ffa28b]">Technologies and Libraries </span> that
        I use:
      </h2>
      <StackListItem />
    </div>
  );
}
