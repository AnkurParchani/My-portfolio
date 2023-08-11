import AnimateOnScroll from "../../ui/AnimateOnScroll";
import Headline from "../../ui/Headline";
import Section from "../../ui/Section";
import Project from "./Project";

const projectDescription = {
  hpArchitects:
    "HP Architects' interactive portfolio website, skillfully crafted and designed using Frontend technologies, beautifully showcases their architectural expertise. A project I'm proud to have contributed to the firm.",
  ledgerMaster: `Introducing "Ledger Master" - a comprehensive ledger website designed to simplify and streamline your customer financial records. With Ledger Master, you can effortlessly create and manage customer profiles, track advanced payments, and monitor outstanding balances.`,
  myPortfolio:
    "My debut React project - a frontend-only personal portfolio. Explore my creative journey and showcase of work through this visually captivating digital showcase.",
};

export default function Work() {
  return (
    <AnimateOnScroll sectionName="section-work">
      <Headline
        line="Some of my projects..."
        headlineClass="sec-work--headline"
      />
      <Section
        secClass="sec-work--border"
        secHeading="Work"
        secIcon="fa-briefcase"
        // colorContent="Have a glance "
        // secSubHeading="at some of my projects."
        secColor="text-[#939aff]"
      >
        <div className="flex flex-col gap-20 overflow-hidden rounded-lg py-5">
          <Project
            projectCurrentStatus="DEPLOYED"
            projectName="HP Architects"
            projectDescription={projectDescription.hpArchitects}
            goToProject="see project"
            projectLink="https://hparchitects.in/"
            projectIcons={["html-icon.png", "css-icon.png", "js-icon.svg"]}
            projectImg="HpArchitects.png"
          />
          <Project
            projectCurrentStatus="NOT DEPLOYED"
            projectName="Ledger Master"
            projectDescription={projectDescription.ledgerMaster}
            goToProject="see codebase"
            projectLink="https://github.com/AnkurParchani/ledger-master"
            projectIcons={[
              "css-icon.png",
              "js-icon.svg",
              "nodejs-icon.svg",
              "pug-icon.png",
              "mongodb-icon.png",
            ]}
            projectImg="Ledger-master.png"
          />
          <Project
            projectCurrentStatus="DEPLOYED"
            projectName="My Portfolio"
            projectDescription={projectDescription.myPortfolio}
            goToProject="see codebase"
            projectLink="https://github.com/AnkurParchani/My-portfolio"
            projectIcons={["tailwind-icon.png", "react-icon.png"]}
            projectImg="My-portfolio.png"
          />
        </div>
      </Section>
    </AnimateOnScroll>
  );
}
