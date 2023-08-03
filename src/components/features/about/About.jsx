import AnimateOnScroll from "../../ui/AnimateOnScroll";
import Question from "../../ui/Question";
import Section from "../../ui/Section";

export default function About() {
  return (
    <AnimateOnScroll sectionName="section-about">
      <Question
        question="Want to know more?"
        secQuestionClass="sec-about--question"
      />
      <Section
        secClass="sec-about--border"
        secHeading="About"
        secIcon="fa-address-card"
        colorContent="I'm the type "
        secSubHeading="of Developer who doesn't drink Coffee."
        secColor="text-[#ffa28b]"
      >
        <div className="flex flex-col gap-8 text-2xl font-normal leading-loose tracking-wide text-gray-300 sm:text-3xl  sm:leading-loose md:gap-10 md:text-4xl md:leading-loose lg:leading-loose ">
          <p>
            A passionate{" "}
            <span className="font-bold tracking-wider text-[#ffa28b]">
              MERN
            </span>{" "}
            full-stack developer from Chattisgarh, India, with over 1 year of
            experience. In my portfolio, you&apos;ll find a collection of
            projects that reflect my creativity and technical prowess.
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
      </Section>
    </AnimateOnScroll>
  );
}
