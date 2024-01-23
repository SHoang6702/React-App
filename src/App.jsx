import Spline from "@splinetool/react-spline";
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
  const [isActive, setIsActive] = useState(false);
  return (
    <AnimatePresence initial={false}>
      <div className="">
        {/*navBar*/}
        <nav className=""></nav>
      </div>
  )
};

export default App;
