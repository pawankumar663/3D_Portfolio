import React, {useRef} from 'react'
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef=useRef(null);
    const project1Ref=useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


    useGSAP(()=>{
        const projects=[project1Ref.current,project2Ref.current,project3Ref.current];

        projects.forEach((card,index)=>{
            gsap.fromTo(card,{
                y:50,opacity:0
            },{
                y:0,opacity:1,
                duration:1,
                delay:0.3*(index+1),
                scrollTrigger:{
                    trigger:card,
                    start:'top bottom-=100'
                }
            })
        })
        gsap.fromTo(sectionRef.current,{opacity:0},{opacity:1, duration:1.5})
    },[])

    return (
        <section id={"work"} ref={sectionRef} className={"app-showcase"}>
            <div className={"w-full"}>
                <div className={"showcaselayout"}>
                {/*left*/}
                    <div className={"first-project-wrapper"} ref={project1Ref}>
                        <div className={"image-wrapper"}>
                            <img src={`${import.meta.env.BASE_URL}images/project1.png`} alt="project1"/>
                        </div>
                        <div className={"text-content"}>
                            <h2>Energy Choice Parts – Industrial Engine Parts E-commerce Platform
                            </h2>
                            <p className={"text-white-50 md:text-xl"}>
                                Developed a secure, intuitive website for sourcing OEM power plant spare parts, integrating Stripe for transactions and optimizing UX for industrial clients and manufacturers.  </p>
                        </div>
                    </div>
                {/*right*/}
                    <div className={"project-list-wrapper overflow-hidden"}>
                        <div className={"project"} ref={project2Ref}>
                            <div className={"image-wrapper bg-[#ffefdb"}>
                                <img src={`${import.meta.env.BASE_URL}images/project2.png`} alt="project2"/>
                            </div>
                            <h2 className={"text-center"}>
                                MetaPOS solution
                                for hospitality
                            </h2>
                        </div>
                        <div className={"project"} ref={project3Ref}>
                            <div className={"image-wrapper bg-[#ffe7eb"}>
                                <img src={`${import.meta.env.BASE_URL}images/project3.png`} alt="YC Directory"/>
                            </div>
                            <h2>
                                V.K. Enterpises - A hardware showcase Application
                            </h2>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default ShowcaseSection
