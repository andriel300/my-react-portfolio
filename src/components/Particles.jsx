import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback, useEffect, useState } from "react";
import useThemeSwitcher from "../hooks/useThemeSwitcher";

const particlesConfig = {
  fpsLimit: 120,
  fullScreen: { enable: false, zIndex: -1 },
  background: {
    color: {
      value: "transparent",
    },
  },
  particles: {
    color: {
      value: "#31c495",
    },
    links: {
      color: "#FFF",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: false,
    },
    move: {
      directions: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: { min: 0.1, max: 1 },
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 200,
    },
    opacity: {
      value: { min: 0.3, max: 0.7 },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  themes: [
    {
      name: "light",
      default: {
        value: true,
        mode: "light",
      },
      options: {
        background: {
          color: "transparent",
        },
        particles: {
          links: {
            color: "#000",
          },
        },
      },
    },
    {
      name: "dark",
      default: {
        value: "true",
        mode: "dark",
      },
      options: {
        background: {
          color: "transparent",
        },
        particles: {
          links: {
            color: "#FFF",
          },
        },
      },
    },
  ],
  detectRetina: true,
};

const ParticlesComponent = () => {
  const [mode, setMode] = useThemeSwitcher();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await container;
  }, []);

  useEffect(() => {
    const themeOptions = particlesConfig.themes.find(
      (theme) => theme.default.mode === mode
    )?.options;
    if (themeOptions) {
      particlesConfig.background.color = themeOptions.background.color;
      particlesConfig.particles.links.color =
        themeOptions.particles.links.color;
    }
  }, [mode]);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig}
    />
  );
};

export default ParticlesComponent;
