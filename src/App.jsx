import { useState } from "react";
import { IoMenu, IoLogoGithub } from "react-icons/io5";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience } from "./components/ui/timeline.jsx";
import { Projects } from "./components/ui/projects.jsx";
import { SocialMedia } from "./components/ui/contact.jsx";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
        {/*navBar */}
        <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
          <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
            <p className="text-lg text-slate-200 font-medium">Sebastian Hoang</p>
            <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              <a
                href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                [Home] 
              </a>

              <a
                href="#about"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                [About] 
              </a>

              <a
                href="#projects"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                [Projects]
              </a>
              <a

                href="#resume"
                className="ml-auto text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
              >
                [Resume]
              </a>
              <a
                href="#contact"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                [Contact]
              </a>
            </div>
          </div>
        </nav>
        {/* MAIN */}
        <main className="w-[80%] mt-5">
          {/*About section */}
          <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24" id="about">
            {/*Content of about Container */}
            <div className="w-full h-420 flex flex-col items-center justify-center">
              <p className="text-lg text-textBase text-center">
                I'm Sebastian Hoang. A mechanic with the Texas Army National Guard. I'm currently studying at the UTSA under their coding bootcamp
                to improved my knowledge and open up potential future career paths.
              </p>
            </div>
          </section>

          <section className="w-full flex items-center justify-center">
            <VerticalTimeline>
              {Experience &&
                Experience.map((el) => (
                  <VerticalTimelineElement
                    key={el.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "#5B744B",
                      color: "#F3BABA",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  #5B744B",
                    }}
                    date={el.date}
                    iconStyle={{
                      background: "#5B744B",
                      color: "#F3BABA",
                    }}
                    icon={el.iconSrc}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {el.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {el.location}
                    </h4>
                    <p>{el.description}</p>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </section>
          {/*Resume*/}
          <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24" id="resume">
            {/*Content of about Container */}
            <div className="w-full h-420 flex flex-col items-center justify-center">
              <p className="text-lg text-textBase text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </section>
          {/*Projects Section */}
          <section
            id="projects"
            className="flex flex-wrap items-center justify-evenly my-24 gap-4"
          >
            {Projects &&
              Projects.map((p) => (
                <div
                  key={p.id}
                  className="border border-zinc-800 rounded-md p-2 min-w-[27px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
                >
                  <p className="text-lg text-textBase font-medium uppercase">
                    {p.name.length > 25 ? `${p.name.slice(0, 25)}...` : p.name}
                  </p>
                  <a href={p.github} alt="Github link">
                    <img
                      src={p.image}
                      className="w-full h-full object-cover rounded-md my-4"
                      alt=""
                    />
                  </a>
                  <div className="flex flex-1 items-center justify-center">
                    <p className="text-lg text-gray-300">
                      Technologies
                      <span className="block text-sm to-gray-500">
                        {p.techs}
                      </span>
                    </p>

                    <a href={p.github}>
                      <motion.div whileTap={{ scale: 0.8 }}>
                        <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                      </motion.div>
                    </a>
                  </div>
                </div>
              ))}
          </section>
          {/* Contact */}

          <section
            id="contact"
            className="flex flex-col items-center justify-center w-full my-24"
          >
            <p className="text-2xl text-gray-400 capitalize">
              Follow me on Github
            </p>
            <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
              {SocialMedia &&
                SocialMedia.map((d) => (
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    key={d.id}
                    href={d.link}
                    className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                  >
                    {d.iconSrc}
                    <p className="text-lg text-textBase">{d.name}</p>
                  </motion.a>
                ))}
            </div>
          </section>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
