import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import SkillsIcons from "../components/SkillsIcons";
import AnimatedText from "../components/AnimatedText";

const MySkills = () => {
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}

      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5 dark:text-white">
            MY <span className="text-orange">SKILLS</span>
          </p>
          <LineGradient width="w-xl" />
          <SkillsIcons />
          <LineGradient width="w-xl" />
          {/* <p className="text-xl mt-10 mb-7">
            I am a skilled full-stack web developer with experience in building
            responsive and user-friendly websites. I have a strong command of
            JavaScript, React, Node.js, and Express, as well as experience with
            databases like PostgreSQL and MongoDB. I have developed multiple web
            applications, including a social media platform, admin dashboards
            and an e-commerce website. I am always eager to learn and stay
            up-to-date with the latest web development trends and technologies.
          </p> */}
          <AnimatedText
            text="Sou um analista de dados habilidoso com experiência na análise e interpretação de conjuntos de dados complexos. Possuo profundo conhecimento em ferramentas analíticas e linguagens como SQL e Python, além de experiência em manipulação e modelagem de dados. Trabalhei em projetos que envolvem análise financeira, logística, recursos humanos e construção de dashboards interativos. Estou comprometido em aplicar minha experiência analítica para extrair insights significativos e impulsionar a tomada de decisões informadas."
            className="text-black-text dark:text-gray-300 font-medium mt-10 mb-7 text-sm xs:text-md sm:text-lg md:text-xl  text-center md:text-start"
          />
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isDesktop ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
             before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="../assets/skills-image.png"
              />
            </div>
          ) : (
            <img
              alt="skills"
              className="z-10"
              src="../assets/skills-image.png"
            />
          )}
        </div>
      </div>

      {/* SKILLS */}

      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10 relative">
              <p className="font-playfair font-semibold text-3xl mt-3 dark:text-white">
                01
              </p>
              <p className="font-playfair font-semibold text-3xl mt-3 dark:text-white relative z-20">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue dark:bg-blue absolute right-0 top-0 z-0" />
          </div>
          <p className="mt-5 dark:text-white">
            I have developed and deployed several responsive and scalable web
            applications that deliver a seamless user experience. With my solid
            understanding of front-end and back-end technologies, I am able to
            build efficient and secure web applications from scratch.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10 relative">
              <p className="font-playfair font-semibold text-5xl dark:text-white">
                02
              </p>
              <p className="font-playfair font-semibold text-3xl mt-3 dark:text-white relative z-20">
                Innovate
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red dark:bg-red absolute right-0 top-0 z-0" />
          </div>
          <p className="mt-5 dark:text-white">
            Strong passion for innovation and creativity, and am always looking
            for new ways to solve complex problems.
          </p>
        </motion.div>

        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10 relative">
              <p className="font-playfair font-semibold text-5xl dark:text-white">
                03
              </p>
              <p className="font-playfair font-semibold text-3xl mt-3 dark:text-white relative z-20">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow dark:bg-yellow absolute right-0 top-0 z-0" />
          </div>
          <p className="mt-5 dark:text-white">
            I bring a creative and imaginative approach to my work. I am
            passionate about creating visually appealing and intuitive user
            interfaces that engage users and deliver a seamless user experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
