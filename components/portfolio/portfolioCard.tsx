"use client";
import { motion } from "framer-motion";

export default function PortfolioCard({
  name,
  img,
  position,
  skill,
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  skill6,
}: any) {
  const cardAnimate = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom: any) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={cardAnimate}
      custom={1}
      viewport={{ once: true }}
      className="port-card"
    >
      <div className="port-card-wrapper">
        <img src={img} alt="ava" />
        <motion.h5 variants={cardAnimate} custom={1.5}>
          {name}
        </motion.h5>
        <motion.span variants={cardAnimate} custom={2}>
          {position}
        </motion.span>
        <motion.ul variants={cardAnimate} custom={4}>
          <li>{skill}</li>
          <li>{skill1}</li>
          <li>{skill2}</li>
          <li>{skill3}</li>
          <li>{skill4}</li>
          <li>{skill5}</li>
          <li>{skill6}</li>
        </motion.ul>
      </div>
    </motion.div>
  );
}
