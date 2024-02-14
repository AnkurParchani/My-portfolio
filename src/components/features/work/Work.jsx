import AnimateOnScroll from "../../ui/AnimateOnScroll";
import Headline from "../../ui/Headline";
import Section from "../../ui/Section";
import Project from "./Project";

const projectDescription = {
  shopSwift:
    "A fully functional Ecommerce website made after learning about PostgreSQL with the help of DrizzleORM, Shop_Swift is an advanced eCommerce website with great user Interface, and the best thing about the site is its theme changer, which is the soul of the site",
  nextBlog:
    "NextBlog empowers you to craft short, impactful blogs with optional images. Create and manage your account effortlessly, engage with other users by liking and saving their blogs, foster meaningful conversations through comments, and personalize your experience by toggling between light and dark themes.",
  edenEmpire:
    "50% Myntra Clone, 100% Innovation: EdenEmpire, an ecommerce website, is a fusion of my expertise, offering a curated fashion shopping experience than an Ecommerce website offers.",
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
        secColor="text-[#939aff]"
      >
        <div className="flex flex-col gap-20 overflow-hidden rounded-lg py-5">
          <Project
            projectCurrentStatus="DEPLOYED"
            projectName="Shop_Swift"
            projectDescription={projectDescription.shopSwift}
            goToProject="see project"
            projectLink="https://shop-swift-tau.vercel.app/"
            projectIcons={[
              "nextjs.svg",
              "typescript.svg",
              "tailwind-icon.png",
              "nodejs-icon.svg",
              "postgres-icon.svg",
            ]}
            projectImg="shop_swift.png"
          />
          <Project
            projectCurrentStatus="DEPLOYED"
            projectName="NextBlog"
            projectDescription={projectDescription.nextBlog}
            goToProject="see project"
            projectLink="https://next-blog-seven-eosin.vercel.app/"
            projectIcons={[
              "nextjs.svg",
              "typescript.svg",
              "tailwind-icon.png",
              "nodejs-icon.svg",
              "mongodb-icon.png",
            ]}
            projectImg="NextBlog.png"
          />
          <Project
            projectCurrentStatus="DEPLOYED"
            projectName="EdenEmpire"
            projectDescription={projectDescription.edenEmpire}
            goToProject="see project"
            projectLink="https://650abf91ec73fb2bd40a71e5--heroic-meringue-bf8dbb.netlify.app/"
            projectIcons={[
              "tailwind-icon.png",
              "react-icon.png",
              "nodejs-icon.svg",
              "mongodb-icon.png",
              "react-query.png",
            ]}
            projectImg="EdenEmpire.png"
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
            projectName="HP Architects"
            projectDescription={projectDescription.hpArchitects}
            goToProject="see project"
            projectLink="https://hparchitects.in/"
            projectIcons={["html-icon.png", "css-icon.png", "js-icon.svg"]}
            projectImg="HpArchitects.png"
          />
        </div>
      </Section>
    </AnimateOnScroll>
  );
}
