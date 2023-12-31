import AnimateOnScroll from "../../ui/AnimateOnScroll";
import Headline from "../../ui/Headline";
import Section from "../../ui/Section";

export default function Intro() {
  return (
    <AnimateOnScroll sectionName="section-intro">
      <Headline line="This is me..." headlineClass="sec-intro--headline" />
      <Section
        secClass="sec-intro--border"
        secColor="text-[#7ee787]"
        secIcon="fa-code"
        secHeading="Intro"
      >
        <div className="flex flex-col gap-10">
          <img
            className="mb-10 w-96 rounded-lg bg-contain bg-center"
            src="Images/my-image.jpg"
            alt="my-image"
          />
          <h2 className="text-5xl font-semibold tracking-wider text-[#d9f7dc] sm:text-6xl lg:text-7xl">
            Hey there!
          </h2>
          <p className=" text-3xl font-normal italic leading-relaxed tracking-wider text-[#d9f7dc] sm:text-4xl sm:leading-relaxed md:leading-relaxed lg:text-5xl lg:leading-relaxed">
            I am a Fullstack Developer proficient in crafting sophisticated
            solutions while maintaining a deep passion for my craft.
          </p>
        </div>
      </Section>
    </AnimateOnScroll>
  );
}
