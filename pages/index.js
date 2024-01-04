import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";

import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Header />

      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >
          <Container>
            <m.article variants={fade}>
              <div className="btn-lg">
                <Link href="/card">
                  {" "}
                  <h2 className="title">Card</h2>
                </Link>
              </div>
            </m.article>
            <m.article variants={fade}>
              <div className="btn-lg">
                <Link href="/hovertext">
                  {" "}
                  <h2 className="title">Hover - Text</h2>
                </Link>
              </div>
            </m.article>
            <m.article variants={fade}>
              <div className="btn-lg">
                <Link href="/hovertext">
                  {" "}
                  <h2 className="title">Hover - Button</h2>
                </Link>
              </div>
            </m.article>
            <m.article variants={fade}>
              <div className="btn-lg">
                <Link href="/preloader">
                  {" "}
                  <h2 className="title">Preloader Animation</h2>
                </Link>
              </div>
            </m.article>
            <m.article variants={fade}>
              <div className="btn-lg">
                <Link href="/marquee">
                  {" "}
                  <h2 className="title">Marquee Animation</h2>
                </Link>
              </div>
            </m.article>
          </Container>
        </m.main>
      </LazyMotion>

      <Footer />
    </Layout>
  );
}
