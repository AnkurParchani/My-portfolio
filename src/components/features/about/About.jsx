import AnimateOnScroll from "../../ui/AnimateOnScroll";
import Headline from "../../ui/Headline";
import Section from "../../ui/Section";
import TechStack from "./TechStack";

export default function About() {
  return (
    <AnimateOnScroll sectionName="section-about">
      <Headline line="Want to know more?" headlineClass="sec-about--headline" />

      <Section
        secClass="sec-about--border"
        secHeading="About"
        secIcon="fa-address-card"
        colorContent="I'm the type "
        secSubHeading="of Developer who doesn't drink Coffee."
        secColor="text-[#ffa28b]"
      >
        <div className="flex flex-col gap-8 pb-8 text-2xl font-normal leading-loose tracking-wide text-gray-300  sm:pb-12 sm:text-3xl sm:leading-loose md:gap-10 md:pb-16 md:text-4xl md:leading-loose lg:leading-loose ">
          <p>
            A passionate{" "}
            <span className="font-bold tracking-wider text-[#ffa28b]">
              MERN
            </span>{" "}
            full-stack developer from Chattisgarh, India, with over 1 year of
            experience. In my portfolio, you&apos;ll discover a compilation of
            projects that showcase my creativity and technical skills.
          </p>
          <p>
            Despite having completed a limited number of projects, I am
            dedicated to continuous learning and always seeking new challenges
            to enhance my skills.
          </p>
          <p>
            I thrive on collaborations and eagerly embrace opportunities to
            contribute my expertise to impactful projects. Let&apos;s join
            forces and build a brighter future together!
          </p>
        </div>

        <TechStack />
      </Section>
    </AnimateOnScroll>
  );
}
