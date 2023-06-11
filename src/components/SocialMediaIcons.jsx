import {
  BsLinkedin,
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsGithub,
} from "react-icons/bs";
import { motion } from "framer-motion";

const SocialMediaIcons = ({ isLanding }) => {
  const socialMediaIconColor = isLanding ? "text-black-text" : "text-white";
  const socialMediaIconDarkColor = isLanding ? "text-white" : "text-black-text";

  return (
    <div
      className={`flex justify-center md:justify-start gap-4 ${socialMediaIconColor} dark:${socialMediaIconDarkColor}`}
    >
      <SocialMediaIconLink
        href="https://www.linkedin.com/andriel-j"
        target="_blank"
        rel="noreferrer"
        isLanding={isLanding}
      >
        <BsLinkedin size={30} />
      </SocialMediaIconLink>
      <SocialMediaIconLink
        href="https://www.twitter.com/andriel_j"
        target="_blank"
        rel="noreferrer"
        isLanding={isLanding}
      >
        <BsTwitter size={30} />
      </SocialMediaIconLink>
      <SocialMediaIconLink
        href="https://www.facebook.com/andriel300"
        target="_blank"
        rel="noreferrer"
        isLanding={isLanding}
      >
        <BsFacebook size={30} />
      </SocialMediaIconLink>
      <SocialMediaIconLink
        href="https://www.instagram.com/andriel.j30"
        target="_blank"
        rel="noreferrer"
        isLanding={isLanding}
      >
        <BsInstagram size={30} />
      </SocialMediaIconLink>
      <SocialMediaIconLink
        href="https://www.github.com/andriel300"
        target="_blank"
        rel="noreferrer"
        isLanding={isLanding}
      >
        <BsGithub size={30} />
      </SocialMediaIconLink>
    </div>
  );
};

const SocialMediaIconLink = ({ href, children, isLanding }) => {
  const socialMediaIconColor = isLanding ? "text-black-text" : "text-white";
  const socialMediaIconDarkColor = isLanding ? "text-white" : "text-black-text";
  return (
    <motion.a
      href={href}
      className={`hover:opacity-80 transition duration-500 ${socialMediaIconColor} dark:${socialMediaIconDarkColor}`}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2 }}
    >
      {children}
    </motion.a>
  );
};

export default SocialMediaIcons;
