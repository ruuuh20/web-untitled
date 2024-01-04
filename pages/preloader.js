import Header from "@/components/header";
import Layout from "@/components/layout";
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m,
  MotionConfig,
  useReducedMotion,
} from "framer-motion";
import Head from "next/head";
import circleLottie from "../public/circle.lottie.json";
import Lottie from "lottie-react";
import Container from "@/components/container";

export default function Preloader() {
  const shouldReduceMotion = useReducedMotion();
  const draw = {
    hidden: { pathLength: shouldReduceMotion ? 1 : 0 },
    visible: { pathLength: 1 },
  };
  const introLogoReveal = {
    visible: { y: shouldReduceMotion ? "0%" : "100%" },
    hidden: { y: "0%" },
  };

  return (
    <>
      <Layout>
        <Header />
        <Container>
          <h1 className="page-title mb-4 text-2xl font-bold md:text-3xl xl:text-4xl">
            Preloaders
          </h1>
          <div className="grid grid-cols-4 gap-4">
            <div className="grid">
              <h4>Framer Motion</h4>
              <LazyMotion features={domAnimation}>
                <div className="flex flex-wrap items-center justify-center w-full h-full">
                  <span className="w-[90px] lg:w-[120px] h-[90px] lg:h-[120px] bg-transparent flex items-center justify-center rounded-full mt-[-1px] mr-2 relative">
                    <m.svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 100 100"
                      initial="hidden"
                      animate="visible"
                    >
                      <m.circle
                        cx="50"
                        cy="50"
                        r="48"
                        className="stroke-red-900 stroke-2 circle"
                        variants={draw}
                        transition={{
                          delay: 0.33,
                          duration: 1.2,
                          ease: [0.83, 0, 0.17, 1],
                        }}
                      />
                    </m.svg>
                  </span>
                </div>
              </LazyMotion>
            </div>
            <div className="grid">
              <h4>CSS</h4>
              <div>
                <a href="" className="link link--herse">
                  <span className="text-sm text-center">Hover</span>
                  <svg
                    className="inset-0 w-full h-full link__graphic link__graphic--stroke link__graphic--arc circle-large"
                    viewBox="0 0 100 100"
                    initial="hidden"
                    animate="visible"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="48"
                      className="stroke-red-900 "
                      pathLength={1}
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="grid">
              Fable/After Effects -- Lottie
              <Lottie animationData={circleLottie} />
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
