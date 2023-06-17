import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, githubLink, ExternalWebLink }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div variants={projectVariant} className="relative">
      <div
        className={overlayStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
        {/* Use the description prop here */}
        {isHovered && (
          <div className="mt-4 flex gap-4">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gray-700 p-2 rounded-md flex flex-row gap-2 hover:text-orange transition duration-500"
            >
              Github
              <FaGithub size={24} />
            </a>
            <a
              href={ExternalWebLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gray-700 p-2 rounded-md flex flex-row gap-2 hover:text-orange transition duration-500"
            >
              View
              <FaExternalLinkAlt size={24} />
            </a>
          </div>
        )}
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl dark:text-white">
            <span className="text-orange">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 dark:text-white">
          Experience seamless navigation and explore a diverse range of features
          designed to enhance your user experience.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-orange
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Project 1"
            description="Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt."
            githubLink="https://github.com/project1"
            ExternalWebLink="https://www.google.com"
          />
          <Project
            title="Project 2"
            description="ECOMMER Store: Fashion-forward online platform offering trendy clothes and styles for fashion enthusiasts worldwide."
            githubLink="https://github.com/project2"
            ExternalWebLink="https://www.google.com"
          />

          {/* ROW 2 */}
          <Project
            title="Project 3"
            description="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at mi varius, dapibus mi quis, congue nibh."
            githubLink="https://github.com/project3"
            ExternalWebLink="https://www.google.com"
          />
          <Project
            title="Project 4"
            description="Praesent non felis at purus consequat egestas. Curabitur finibus fringilla eleifend. Fusce facilisis, mauris sit amet fermentum posuere, ex nibh gravida mi, in vulputate purus erat sit amet justo."
            githubLink="https://github.com/project4"
            ExternalWebLink="https://www.google.com"
          />
          <Project
            title="Project 5"
            description="Sed a nulla sed lectus dapibus aliquet eget ut metus. Curabitur ac ligula sem. Duis fringilla, nunc a tincidunt posuere, turpis nisl vehicula urna, sed condimentum quam ante non lorem."
            githubLink="https://github.com/project5"
            ExternalWebLink="https://www.google.com"
          />

          {/* ROW 3 */}
          <Project
            title="Project 6"
            description="Fusce eget purus id nunc rhoncus facilisis. Nam ultricies ipsum id fringilla volutpat. Cras eu nisi a nunc tristique sollicitudin."
            githubLink="https://github.com/project6"
            ExternalWebLink="https://www.google.com"
          />
          <Project
            title="Project 7"
            description="Donec bibendum tortor sed turpis consectetur, sit amet faucibus ipsum pellentesque. In aliquet ullamcorper nisl, a feugiat ligula gravida eu."
            githubLink="https://github.com/project7"
            ExternalWebLink="https://www.google.com"
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
