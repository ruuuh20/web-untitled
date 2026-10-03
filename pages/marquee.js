import Container from "@/components/container";
import Header from "@/components/header";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { gsap } from "gsap";

const Marquee = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        },
      },
    },
  };

  useEffect(() => {
    gsap.to(".marquee-part", {
      x: "-100%",
      // x: () => -document.querySelector(".marquee-inner").offsetWidth,
      repeat: -1, // repeat indefinitely
      duration: 6, // duration of one cycle in seconds
      ease: "linear", // linear easing function
    });
  }, []);

  return (
    <>
      <Layout>
        <Header />
        <Container>
          <h1 className="mb-4 text-2xl font-bold page-title md:text-3xl xl:text-4xl">
            Marquee
          </h1>
          <div className="grid"> CSS (Keyframe)</div>
          <div className="grid grid-rows-3 gap-4">
            <div className="relative flex overflow-x-hidden text-[17vw] lg:text-[10vw]  uppercase">
              <div className="a-marquee will-change-transform whitespace-nowrap pb-[0vw] lg:pb-[2vw]">
                <span className="relative inline-block ml-4 overflow-hidden">
                  Site of the Day &ndash;
                </span>
                <span className="relative inline-block ml-4 overflow-hidden">
                  Site of the Day &ndash;
                </span>
                <span className="relative inline-block ml-4 overflow-hidden">
                  Site of the Day &ndash;
                </span>
                <span className="relative inline-block ml-4 overflow-hidden">
                  Site of the Day &ndash;
                </span>
                <span className="relative inline-block ml-4 overflow-hidden">
                  Site of the Day &ndash;
                </span>
                <span className="relative inline-block ml-4 overflow-hidden">
                  Site of the Day &ndash;
                </span>
              </div>
            </div>

            <div className="fm">
              <h2 className="flex items-center justify-center text-xl font-bold">
                Framer
              </h2>
              <div className="marquee-framer">
                <motion.div
                  className="track"
                  variants={marqueeVariants}
                  animate="animate"
                >
                  <h1>
                    Site of the Day. Site of the Day. Site of the Day. Site of
                    the Day. Site of the Day. Site of the Day
                  </h1>
                </motion.div>
              </div>
            </div>

            <div className="overflow-hidden">
              <h2 className="flex items-center justify-center text-xl font-bold">
                GSAP
              </h2>
              <div className="marquee-gsap">
                <div className="marquee-inner">
                  <div className="marquee-part">Site of the Day &ndash;</div>
                  <div className="marquee-part">Site of the Day &ndash;</div>
                  <div className="marquee-part">Site of the Day &ndash;</div>
                  <div className="marquee-part">Site of the Day</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Marquee;
