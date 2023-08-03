import Section from "../../ui/Section";
import Question from "../../ui/Question";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactInput from "./ContactInput";
import { toast } from "react-hot-toast";
import AnimateOnScroll from "../../ui/AnimateOnScroll";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hjxpxhb",
        "template_dyxri7o",
        form.current,
        "SKtNq4tvxGhxWBNR3",
      )
      .then(
        () => {
          e.target.reset();
          toast.success("Message sent successfully");
        },
        (error) => {
          console.log(error);
          toast.error("Something went wront! Try again later.");
        },
      );
  };

  return (
    <AnimateOnScroll sectionName="section-contact">
      <Question
        question="Queries? Why not!"
        secQuestionClass="sec-contact--question"
      />
      <Section
        secClass="sec-contact--border"
        secHeading="Contact"
        secIcon="fa-address-book"
        colorContent="Let's meet up, "
        secSubHeading="online or offline - both work!"
        secColor="text-[#8bf0ff]"
      >
        <div className="mt-20">
          <form
            ref={form}
            spellCheck={false}
            onSubmit={sendEmail}
            autoComplete="off"
            className=" flex flex-col gap-12 text-2xl font-bold tracking-wider text-gray-300 md:text-3xl "
          >
            <ContactInput
              type="text"
              inputTag="input"
              name="user_name"
              labelName="Name"
              required={true}
            />
            <ContactInput
              type="email"
              inputTag="input"
              labelName="Email"
              name="user_email"
              required={true}
            />
            <ContactInput
              labelName="Message"
              name="message"
              inputTag="textarea"
            />

            <button
              className="rounded-md bg-[#41a1b0] py-2 font-bold tracking-wider duration-200 hover:bg-white hover:text-black md:py-3"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </Section>
    </AnimateOnScroll>
  );
}
