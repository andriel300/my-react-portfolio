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
      transition: { duration: 0.5, delay: 1, ease: [0.5, 0.71, 1, 1.01] },
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
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 dark:before:border-blue before:border-black before:z-[-1]"
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
      {isDesktop && (
        <motion.div
          className="flex flex-col justify-center items-center mt-5 sm:text-center sm:mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="w-5 h-5 rounded-full dark:bg-[#12e2f5] bg-slate-900 sm:mt-5" />
          <div className="w-1 sm:h-96 h-40 dark:bg-gradient-rainblue bg-slate-900" />
        </motion.div>
      )}
      {/* HERO SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32 flex flex-col justify-center">
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
          <p className="text-5xl dark:text-white font-playfair z-10 text-center md:text-start">
            Oi, eu sou ANDRIEL
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 10 }}
              className="dark:text-cyan-500 text-white bg-black rounded-full py-12 p-1 dark:rounded-full xs:relative z-20 before:absolute"
            >
              JOSÉ
            </motion.span>
          </p>
          <TypeAnimation
            sequence={[
              "Eu sou Analista de Dados",
              1000,
              "Eu sou Analista de Bi",
              1000,
              "Eu sou um Entusiasta de Tecnologia",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="mt-12 text-black-text dark:text-white"
            style={{
              fontSize: "2em",
              display: "inline-block",
            }}
            repeat={Infinity}
          />

          <AnimatedText
            className="text-black-text dark:text-gray-300 font-medium mt-10 mb-7 text-base text-center md:text-start"
            text="Sou um analista de dados motivado, com sólidas habilidades de resolução de problemas e uma atitude positiva que me capacita a abordar desafios com uma mentalidade analítica e proativa."
          />
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          // transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="dark:bg-gradient-rainbow dark:text-deep-blue bg-black text-white
            rounded-sm py-3 px-7 font-semibold transition duration-500
            hover:translate-x-2 focus:outline-none"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Meu Contato
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainbow py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue text-white hover:text-blue transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
              Vamos conversar.
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
            <motion.a
              className="flex items-center rounded-lg border-2 border-solid bg-black
  p-2.5 px-6 m-5 text-lg font-semibold capitalize text-white transition-colors duration-300 hover:border-black hover:bg-transparent hover:text-black dark:bg-white dark:text-black dark:hover:border-white dark:hover:bg-black dark:hover:text-white md:p-2 md:px-4 md:text-base"
              href="/public/dummy.pdf"
              target="_blank"
              download={true}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Currículo <LinkArrow className={"w-6 ml-1"} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="absolute left-1/2 transform -translate-x-1/2 xs:bottom-2/4 md:bottom-10 flex justify-center items-center"
      >
        <a href="#skills">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 dark:border-y-gray-400 border-y-black flex
      justify-center items-start p-2"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full dark:bg-gray-400 bg-black mb-1"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Landing;
