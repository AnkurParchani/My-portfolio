import AOS from "aos";
import "aos/dist/aos.css";
import { Element } from "react-scroll";

AOS.init();

export default function AnimateOnScroll({ children, sectionName }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="300"
      data-aos-easing="ease-out"
    >
      <Element name={sectionName}>{children}</Element>
    </div>
  );
}
