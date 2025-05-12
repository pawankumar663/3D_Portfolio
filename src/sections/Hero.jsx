import React, { useRef } from "react";
import { words } from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/Models/HeroModal/HeroExperience.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter.jsx";

const Hero = () => {
  const imageRef = useRef(null);
  const headOneRef = useRef(null);
  const headTwoRef = useRef(null);
  const headThreeRef = useRef(null);

  useGSAP(() => {
    const animList = [
      headOneRef.current,
      headTwoRef.current,
      headThreeRef.current,
    ];
    animList.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 2.5,
          delay: 0.3 * (index + 1),

          ease: "power2.inOut",
        }
      );
    });
  });

  useGSAP(() => {
    gsap.fromTo(
      imageRef.current,
      {
        y: 50,
        opacity: 0,
        rotationY:  90 , // only image rotates
        transformPerspective: 800,
        transformOrigin: "center",
      },
      {
        y: 0,
        opacity: 1,
        rotationY: 0,
        stagger: 0.2,
        duration: 2.5,
        delay: 0.3 * 2,
        ease: "power2.inOut",
      }
    );
  });

  return (
    <section id="hero" className={"relative overflow-hidden"}>
      <div className={"absolute top-0 left-0 z-10"}>
        <img src={"/images/bg.png"} alt="background" />
      </div>

      <div className=" w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <div className="transition ease-in-out duration-500 hover:scale-125">
        <div
          ref={imageRef}
          className="rounded-full md:w-50 w-34 p-1 animate-rotate-border bg-conic/[from_var(--border-angle)] from-[#d9ecff] via-[#6a329f] to-[#d9ecff]"
        >
          <img
            src={"/images/profile_img.png"}
            alt=""
            className="rounded-full md:w-48 w-32 "
          />
        </div>
        </div>
        <h3
          ref={headOneRef}
          className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
        >
          Hi! I'm Pawan Kumar
          <img src={"/images/hand-icon.png"} alt="" className="w-6" />
        </h3>
        <h1
          ref={headTwoRef}
          className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
        >
          Web and Mobile App Developer
        </h1>
        <p ref={headThreeRef} className="max-w-2xl mx-auto font-Ovo">
          I bring 4+ years of experience building fast, scalable, and beautiful
          digital products — from interactive websites to cross-platform mobile
          applications.
        </p>
      </div>
      {/*</div>*/}
      <AnimatedCounter />
    </section>
  );
};
export default Hero;
