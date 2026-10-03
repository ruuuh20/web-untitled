import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";

import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function ShapeShift() {
  return (
    <Layout>
      <Header />

      <LazyMotion features={domAnimation}>
        <div>shape</div>
        <div className="rounded-bl-[200px] group-hover:rounded-bl-[0] rounded-fix">
          <div className="w-[200px] border-2">IMAGE</div>
        </div>
      </LazyMotion>

      <Footer />
    </Layout>
  );
}
