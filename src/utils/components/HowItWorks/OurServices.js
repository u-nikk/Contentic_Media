import React from 'react'
import './OurServices.css'
import Image from 'next/image'
import { easeIn, motion } from 'framer-motion'
import { features, hitFeatures } from '../../data'
import {tagVariants,titleVariants,desVariants, containerVariants} from "@/src/utils/animation"
const OurServices = () => {

    const featureVariants ={
        offscreen:{
            scale:0.5
        },
        onscreen:{
            scale:1,
            transition:{
                type:"spring",
                duration:1.5,
            },
        },
    }
    return (
        <div>
            <div className="services-wrapper">
                <div className="container">
                    <div className="services-container">
                        {/*head*/}
                        <div className="services-head">
                            <motion.span
                            variants={tagVariants}
                            initial="offscreen"
                            whileInView={"onscreen"}
                             className='tag'>Our Services</motion.span>
                            <motion.span
                            variants={titleVariants}
                            initial="offscreen"
                            whileInView={"onscreen"} className='title'>Influencer Marketing Excellence - Our Comprehensive Services</motion.span>
                            <motion.span
                            variants={desVariants}
                            initial="offscreen"
                            whileInView={"onscreen"}className='sec-text'>At Contentic Media, we are the pioneers of influencer marketing, offering unparalleled services that transcend industry standards.
                            </motion.span>
                        </div>
                        <div className="services-features">
                            {
                                hitFeatures.map((feature, i) => (
                                    <motion.div 
                                    variants={featureVariants}
                                    initial="offscreen"
                                    whileInView={"onscreen"}
                                    className='services-feature' key={i}>
                                        {/*left side*/}
                                        <motion.div
                                        initial={{opacity:0,x:-100}}
                                        whileInView={{
                                            opacity:1,
                                            x:0,
                                            transition:{
                                                type:"easeIn",
                                                duration:1,
                                                delay:.7
                                            }
                                        }}
                                        className="details">
                                            <span className='des'>0{i + 1}</span>
                                            <span className='sec-title'>{feature.title}</span>
                                            <span className='text'>{feature.des}</span>

                                        </motion.div>
                                        {/*right side*/}
                                        <div className="icon">
                                            <motion.img
                                                src={feature.icon}
                                                width={128}
                                                height={128}
                                                alt='feature' 
                                                style={{translate:"50% 0rem"}}/>
                                        </div>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default OurServices
