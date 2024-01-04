import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'

import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'


export default function Resources() {
  return (
    <Layout>
     

      <Header />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >
          <Container>
            <m.div variants={fade}>
              <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl mb-4">Resources / Credits</h1>
            
              
          
            </m.div>
          </Container>
        </m.div>
      </LazyMotion>

      <Footer />
    </Layout>
  )
}
