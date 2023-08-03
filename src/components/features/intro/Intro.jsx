import AnimateOnScroll from "../../ui/AnimateOnScroll";
import Question from "../../ui/Question";
import Section from "../../ui/Section";

export default function Intro() {
  return (
    <AnimateOnScroll sectionName="section-intro">
      <Question question="Who am I?" secQuestionClass="sec-intro--question" />
      <Section
        secClass="sec-intro--border"
        secColor="text-[#7ee787]"
        secIcon="fa-code"
        secHeading="Intro"
      >
        <div className="flex flex-col gap-10">
          <img
            className="mb-10 w-96 rounded-lg bg-contain bg-center"
            src="Images/my-image.jpeg"
            alt="my-image"
          />
          <h2 className="text-5xl font-semibold tracking-wide text-gray-100 sm:text-6xl lg:text-7xl">
            Hey there!
          </h2>
          <p className="text-3xl font-normal leading-normal tracking-wide text-gray-300 sm:text-4xl lg:text-5xl">
            I&apos;m a Frontend Developer. I code simple things and I love what
            I do.
          </p>
        </div>
      </Section>
    </AnimateOnScroll>
  );
}
