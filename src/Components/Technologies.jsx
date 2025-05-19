import { BiLogoPostgresql } from "react-icons/bi";
import { DiJavascript, DiJavascript1, DiRedis } from "react-icons/di";
// import { FaJava, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { RiJavaLine } from "react-icons/ri";
import { TbBrandPython } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl "
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(2.5)}
        >
          <RiReactjsLine className=" text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(3)}
          className="p-4 "
        >
          <FaHtml5 className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(5)}
          className="p-4"
        >
          <SiMysql className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(2.5)}
        >
          <SiTailwindcss className=" text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(2)}
          className="p-4"
        >
          <TbBrandJavascript className="text-7xl text-red-700" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(6)}
          className="p-4"
        >
          <FaCss3Alt className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(6)}
          className="p-4"
        >
          <RiJavaLine className="text-7xl text-pink-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(4)}
          className="p-4"
        >
          <TbBrandCpp className="text-7xl text-sky-700" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(5)}
          className="p-4"
        >
          <TbBrandPython className="text-7xl text-yellow-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
