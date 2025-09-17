import { useCallback } from "react";
// import Particles from "react-tsparticles";
import Particles from "@tsparticles/react";
// import { loadFull } from "tsparticles"; // bigger bundle if you want all features
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadSlim(engine); // lightweight build
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);

    const nasaOptions = {
        autoPlay: true,
        fullScreen: {
            enable: true,
            zIndex: 0, // stays behind your content
        },
        detectRetina: true,
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: { enable: true, mode: "repulse" },
                onHover: { enable: true, mode: "bubble" },
                resize: { enable: true },
            },
            modes: {
                bubble: { distance: 250, duration: 2, opacity: 0, size: 0 },
                repulse: { distance: 400, duration: 0.4 },
            },
        },
        particles: {
            number: {
                value: 160,
                density: { enable: true, width: 1920, height: 1080 },
            },
            color: { value: "#00bf8f" }, // ✅ corrected
            shape: { type: "circle" },
            opacity: {
                value: { min: 0.1, max: 1 },
                animation: { enable: true, speed: 1 },
            },
            size: { value: { min: 1, max: 3 } },
            move: {
                enable: true,
                speed: { min: 0.1, max: 1 },
                direction: "none",
                outModes: { default: "out" },
            },
        },
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={nasaOptions} // ✅ use local config instead of URL
        />
    );
};

export default ParticlesBackground;
