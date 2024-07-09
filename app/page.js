"use client"
import Navbar from '@/src/utils/components/Navbar/Navbar';
import './page.css'
import Hero from '@/src/utils/components/Hero/Hero';
import BrandingVideo from '@/src/utils/components/BrandingVideo/BrandingVideo';
import OurDiff from '@/src/utils/components/OurDiff/OurDiff';
import { motion, useAnimation } from 'framer-motion'
import OurServices from '@/src/utils/components/HowItWorks/OurServices';
import Testimonials from '@/src/utils/components/Testimonials/Testimonials';
import Form from '@/src/utils/components/Contact/Form';
import Footer from '@/src/utils/components/Footer/Footer';
import { Button } from 'react-scroll';
import Float from '@/src/utils/components/Float/Float';


export default function Home() {
  const controls = useAnimation()
  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Hero />
      <BrandingVideo />
      <motion.div
        onViewportEnter={() => controls.start({
          backgroundColor: "var(--secondary-color)",
        })}
        onViewportLeave={() => controls.start({
          backgroundColor: "white"
        })
        }
        viewport={{ amount: 0.4 }}
      >
        <OurDiff />
      </motion.div>
      <OurServices />


      <motion.div
        onViewportEnter={() => controls.start({
          backgroundColor: "var(--light-bg)",
        })}
        onViewportLeave={() => controls.start({
          backgroundColor: "white"
        })
        }
        viewport={{ amount: 0.4 }}
      >
        <Testimonials />
      </motion.div>
      
       <Form/>
       <motion.div>
      <Footer/>
      </motion.div>
     <Float/>
    </motion.div>


  );
}
