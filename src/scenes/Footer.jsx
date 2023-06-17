import SocialMediaIcons from "../components/SocialMediaIcons";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut", staggerChildren: 0.3 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <motion.footer
      className="h-64 bg-deep-blue pt-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-5/6 mx-auto">
        <motion.div
          className="flex justify-center md:justify-between text-center"
          variants={iconVariants}
        >
          <SocialMediaIcons isLanding={false} />
        </motion.div>
        <motion.div
          className="md:flex justify-center md:justify-between text-center"
          variants={textVariants}
        >
          <p className="m-7 font-playfair font-semibold text-2xl text-white">
            ANDRIEL JOSÉ
          </p>
          <p className="font-playfair text-xl text-white">
            ©2023 JOSÉ. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
