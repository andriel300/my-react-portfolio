/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import AnimatedText from "../components/AnimatedText";
import { LinkArrow } from "../components/Icons";
import { TypeAnimation } from "react-type-animation";

const Landing = ({ setSelectedPage }) => {
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  // Define the animation for the image
  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      x: [0, 150, 50],
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.3, ease: [0.5, 0.71, 1, 1.01] },
    },
  };

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isDesktop ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
              before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full
              before:border-2 before:border-blue before:z-[-1]"
          >
            {/* Wrap the image in a motion component */}
            <motion.img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
              max-w-[300px] md:max-w-[500px]"
              src="../assets/profile-image.png"
              variants={imageAnimation} // Apply the animation
              initial="hidden"
              animate="visible"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
              max-w-[300px] md:max-w-[500px]"
            src="../assets/profile-image.png"
          />
        )}
      </div>
      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl dark:text-white font-playfair z-10 text-center md:text-start">
            ANDRIEL
            <span
              className="xs:relative xs:text-deep-blue xs-font-semibold z-20
              xs:before:content-brush before:absolute before:-left-[25px]
              before:-top-[75px] before:z-[-1]"
            >
              JOSÉ
            </span>
          </p>

          <AnimatedText
            className="text-black-text dark:text-white font-medium mt-10 mb-7 text-base text-center md:text-start"
            text="I am a full-stack web developer wih a self-motivated individual with strong problem-solving skills and a positive attitude that helps me tackle challenges with a creative and proactive approach."
          />
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "I'm a Coder",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "I'm a Tech Enthusiast ",
              1000,
              "I'm a Full-Stack Web Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-black-text dark:text-white"
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainbow text-deep-blue
            rounded-sm py-3 px-7 font-semibold transition duration-500
            hover:translate-x-2 focus:outline-none"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainbow py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue text-white hover:text-blue transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex items-center self-start lg:self-center mt-2">
            <SocialMediaIcons isLanding={true} />
            <a
              className="flex items-center rounded-lg border-2 border-solid bg-black
              p-2.5 px-6 m-5 text-lg font-semibold capitalize text-white hover:border-black hover:bg-transparent hover:text-black dark:bg-white dark:text-black dark:hover:border-white dark:hover:bg-black dark:hover:text-white md:p-2 md:px-4 md:text-base"
              href="/public/dummy.pdf"
              target="_blank"
              download={true}
            >
              Resume <LinkArrow className={"w-6 ml-1"} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
