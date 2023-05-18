"use client";
import { motion } from "framer-motion";

export default function AboutComponent() {
  const WhyUs = [
    {
      num: 4,
      title: "года на рынке",
    },
    {
      num: 20,
      title: "профессиональных барберов",
    },
    {
      num: 70,
      title: "тысяч выбритых голов",
    },
    {
      num: 172,
      title: "тысяч довольных клиентов",
    },
    {
      num: 3,
      title: "филиала",
    },
    {
      num: 54,
      title: "заточенных инструмента",
    },
  ];

  const aboutAminate = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom: any) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        id="aboutus"
        className="aboutus"
      >
        <div className="aboutus-wrapper">
          <h1>ПОЧЕМУ МЫ?</h1>
          <div className="us-content">
            {WhyUs.map((el: any, i: number) => (
              <div className="us-content-wrapper" key={i}>
                <motion.h1 variants={aboutAminate} custom={1}>
                  {el.num}
                </motion.h1>
                <motion.h5 variants={aboutAminate} custom={2}>
                  {el.title}
                </motion.h5>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
