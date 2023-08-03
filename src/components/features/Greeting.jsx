import { useEffect, useState } from "react";
import { HiArrowSmallDown } from "react-icons/hi2";
import { Link } from "react-scroll";

export default function Greeting() {
  const [showIcon, setShowIcon] = useState(true);
  const scrollPoint = 400;

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > scrollPoint) setShowIcon(false);
      else setShowIcon(true);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pointer-events-none relative mx-auto my-0 mb-20 flex h-[100vh] w-4/5 flex-col justify-between px-3">
      <div className="overflow-hidden">
        <h1 className="storyLine mb-10 mt-40 inline-block animate-text-appear text-4xl font-bold leading-tight tracking-wide text-[#e7e7e8] sm:text-7xl md:text-8xl lg:text-9xl">
          Let&apos;s begin my story
        </h1>
        <p className="text-opacity text-xl font-medium leading-relaxed tracking-wider text-[#e7e7e8] opacity-0 lg:text-4xl">
          I&apos;ll be brief and to the point, so as not to waste your valuable
          time.
        </p>
      </div>

      {showIcon && (
        <Link
          className="pointer-events-auto absolute bottom-40 left-2/4  animate-bounce text-7xl sm:text-8xl"
          duration={1000}
          offset={-120}
          activeClass="active"
          to="section-intro"
          spy={true}
          smooth={true}
        >
          <HiArrowSmallDown className="-translate-x-2/4 cursor-pointer" />
        </Link>
      )}
    </div>
  );
}
