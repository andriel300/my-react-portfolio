import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Hi! I am Andriel {""}
            <span
              className="xs:relative xs:text-deep-blue xs-font-semibold pl-12 z-20
              xs:before:content-brush before:absolute before:-left-[25px]
              before:-top-[70px] before:z-[-1] "
            >
              José
            </span>
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            I am a full-stack web developer wih a self-motivated individual with
            strong problem-solving skills and a positive attitude that helps me
            tackle challenges with a creative and proactive approach.
          </p>
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
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
            hover:bg-blue hover:text-dark-grey transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
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
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
