import React from 'react'
import './OurDiff.css'
import { features, ourDiffFeatures } from '../../data'
import Image from 'next/image'
import {tagVariants,titleVariants,desVariants, containerVariants} from "@/src/utils/animation"
import { motion } from 'framer-motion'
const OurDiff = () => {
    return (
        <div className='od-wrapper'>
            <div className="container">
                <div className="od-container">
                    {/*head*/}
                    <div className="od-head">
                        <motion.span
                            variants={tagVariants}
                            initial="offscreen"
                            whileInView={"onscreen"}
                            className='tag'>Why Choose Contentic Media?</motion.span>
                        <motion.span
                            variants={titleVariants}
                            initial="offscreen"
                            whileInView={"onscreen"} className='title'>Influencer Marketing Excellence - Our Comprehensive Services</motion.span>
                        <motion.span
                            variants={desVariants}
                            initial="offscreen"
                            whileInView={"onscreen"} className='text'>
                            {" "}
                                At Contentic Media, we are the pioneers of influencer marketing, offering unparalleled services that transcend industry standards.
                            </motion.span>
                    </div>
                    {/*features*/}
                    <div className="od-features">
                        {
                            ourDiffFeatures.map((feature, i) => (
                                <motion.div 
                                key={i} 
                                variants={containerVariants((i+1)*0.1)}
                                initial="offscreen"
                                whileInView="onscreen"
                                className='od-feature'>
                                    <motion.img src={feature.icon} alt={feature.icon}
                                        width={128}
                                        height={128} />
                                    <span className='sec-title'>{feature.title}</span>
                                    <span className='sec-text'>{feature.des}</span>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurDiff
