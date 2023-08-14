import React from "react";
import Skills from "./Skills";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import skills from "../assets/skills-image.png";

const MySkills = ({setSelectedPage}) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* {Header and image section} */}

      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <Skills width="w-1/3" />
          <p className="mt-10 mb-7 ">
          Crafting Possibilities: My Skill Set in Action
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10  before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img alt="skills" className="z-10" src={skills} />
            </div>
          ) : (
            <img alt="skills" className="z-10" src={skills} />
          )}
        </div>
      </div>
      {/* {SKILLS} */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* {Experience} */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Web Development
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]"/>
          </div>
          <ol className="mt-5 list-disc">
            <li>React.js, Next.js</li>
            <li>Javascript, Html, CSS</li>
            <li>Github, Netlify</li>
            <li>Node.js</li>
           </ol>
        </motion.div>

        {/* {INNOVATIVE} */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay:0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                AI & ML
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]"/>
          </div>
          <ol className="mt-5 list-disc">
            <li>Python</li>
            <li>TensorFlow</li>
            <li>Pandas & Numpy</li>
            <li>CNN & RNN</li>
           </ol>
        </motion.div>

        {/* {Imaginative} */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay:0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 " >
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Game Development & UI-UX
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]"/>
          </div>
          
           <ul className="mt-5 list-disc">
            <li>Unity 3d & 2d</li>
            <li>Unity Assets</li>
            <li>C#</li>
            <li>Figma, Wireframing</li>
           </ul>
          
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
