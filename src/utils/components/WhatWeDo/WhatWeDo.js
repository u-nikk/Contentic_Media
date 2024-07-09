import React from 'react'
import './WhatWeDo.css'
import { features } from '../../data'
import Image from 'next/image'
const WhatWeDo = () => {
    return (
        <div className='ser-wrapper'>
            <div className="container">
                <div className="ser-contaienr">
                    {/*Head of section*/}
                    <div className="ser-head">
                        <span
                            className='tag'>    Our Services</span>
                        <span className='title'>
                            {" "}
                            Influencer Marketing Excellence-Our Comprehensive Services</span>
                        <span>At Contentic Media, we are the pioneers of influencer marketing, offering unparalleled services that transcend industry standards.
                        </span>
                    </div>

                    {/*five block*/}
                    <div className="ser-blocks">
                        <div className="ser-block">

                            {/*first*/}

                            <span className='sec-title'> Influencer Discovery</span>
                            <span>Our technology enables us to classify, discover, and select the right influencers based on relevance, authenticity, brand safety, predictive performance, and 20+ other key data points.</span>

                            <div className="block-features">
                                {
                                    features.slice(0, 3).map((features, i) => (
                                        <div className='block-feature' key={i}>
                                            <Image src={features.icon} alt='feature'
                                                width={60}
                                                height={60} />
                                            <span>{features.title}</span>
                                        </div>
                                    )
                                    )
                                }
                            </div>
                        </div>


                        <div className="ser-block">
                            <span className='sec-title'> Campaign Execution</span>
                            <span>We flawlessly execute campaigns, ensuring your brand goals are met and providing detailed campaign metrics and insights, ensuring measurable success.</span>
                            <div className="block-features">
                                {
                                    features.slice(0, 3).map((features, i) => (
                                        <div className='block-feature' key={i}>
                                            <Image src={features.icon} alt='feature'
                                                width={60}
                                                height={60} />
                                            <span>{features.title}</span>
                                        </div>
                                    )
                                    )
                                }
                            </div>
                        </div>
                        <div className="ser-block">
                            <span className='sec-title'>Influencer Network</span>
                            <span>From celebrity and macro creators to micro-influencers and college ambassadors, our vast relationships ensure you not only get the right people to represent your brand but also the best costs.</span>
                            <div className="block-features">
                                {
                                    features.slice(0, 3).map((features, i) => (
                                        <div className='block-feature' key={i}>
                                            <Image src={features.icon} alt='feature'
                                                width={60}
                                                height={60} />
                                            <span>{features.title}</span>
                                        </div>
                                    )
                                    )
                                }
                            </div>
                        </div>
                        <div className="ser-block">
                            <span className='sec-title'> Content Creation</span>
                            <span>Our teams are experts in thinking holistically about influencer marketing strategy and digital content, from social media integrations to influencer-led IPs.
                            </span>
                            <div className="block-features">
                                {
                                    features.slice(0, 3).map((features, i) => (
                                        <div className='block-feature' key={i}>
                                            <Image src={features.icon} alt='feature'
                                                width={60}
                                                height={60} />
                                            <span>{features.title}</span>
                                        </div>
                                    )
                                    )
                                }
                            </div>
                            </div>
                        <div className="ser-block">
                            <span className='sec-title'>Data-Driven Results</span>
                            <span>We leverage data and cultural themes to deliver out-of-the-box influencer content. Our technology makes the influencer loop measurable, ensuring the best ROI for our clients.</span>
                            <div className="block-features">
                                {
                                    features.slice(0, 3).map((features, i) => (
                                        <div className='block-feature' key={i}>
                                            <Image src={features.icon} alt='feature'
                                                width={60}
                                                height={60} />
                                            <span>{features.title}</span>
                                        </div>
                                    )
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhatWeDo
