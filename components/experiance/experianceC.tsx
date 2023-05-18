"use client";
import { motion } from "framer-motion";

export default function ExperianceComponent() {
  const cardAnimate = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: any) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      id="experiance"
      className="exper"
    >
      <div className="exper-wrapper">
        <div className="exp-left">
          <motion.div
            variants={cardAnimate}
            custom={1}
            className="exp-text-wrapper"
          >
            <h2>MARSHAL BARBERSHOP</h2>
            <h5>МЕСТО ТВОЕГО СТИЛЯ</h5>
            <span className="exp-span"></span>
            <p>Барбершоп Маршал был основан в 2016 году.</p>
            <p>Основная цель: создать комфортное место для мужчин.</p>
            <p>
              Миссия: оказывать профессиональные услуги барберинга по
              оптимальной цене.
            </p>
            <p>Наша атмосфера создана под мужской настрой и характер.</p>
          </motion.div>
          <div className="exp-additional-wrapper">
            <motion.div variants={cardAnimate} custom={1} className="exp-icon">
              <motion.svg
                enableBackground="new 0 0 512 512"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <motion.path
                  d="   M116.4,448.4h236.5c0.1-0.2,0.2-0.4,0.3-0.6c31.7-56.2,52.3-117.9,60.7-181.8l8.4-64.4H47l8.4,64.4c8.3,63.9,29,125.7,60.7,181.8   C116.2,448.1,116.3,448.3,116.4,448.4z"
                  variants={icon}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="10"
                />
                <line
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="10"
                  x1="414.9"
                  x2="54.3"
                  y1="240.7"
                  y2="240.7"
                />
                <path
                  d="   M427.9,452c0,24.3-17.1,44-38.1,44h-80.2H162.3H79.5c-21,0-38.1-19.7-38.1-44v-3.5h386.5V452z"
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="10"
                />
                <g>
                  <path
                    d="    M213.9,74.7c-9.7,1.3-17.3,10.4-17.9,20c-0.8,12.3,10.3,19.4,18.6,26.3c9.8,8,20.3,17.9,22.3,31.3c1.8,12.6-5.1,25.8-18.6,27.4"
                    fill="none"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="10"
                  />
                  <path
                    d="    M250,16c-9.7,1.3-17.3,10.4-17.9,20c-0.8,12.3,10.3,19.4,18.6,26.3c9.8,8,20.3,17.9,22.3,31.3c1.8,12.6-5.1,25.8-18.6,27.4"
                    fill="none"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="10"
                  />
                </g>
                <path
                  d="   M418.7,227c43.7,9,58.9,27.5,49.1,65.6c-10,38.9-79.2,82.9-79.2,82.9"
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="10"
                />
              </motion.svg>
              <span>БЕСПЛАТНЫЙ КОФЕ И ЧАЙ</span>
            </motion.div>
            <motion.div variants={cardAnimate} custom={2} className="exp-icon">
              <img
                src="https://static.tildacdn.com/tild6537-3034-4330-a336-383261303861/photo.png"
                alt="ico"
              />
              <span>БЕСПЛАТНЫЙ PLAY STATION</span>
            </motion.div>
            <motion.div variants={cardAnimate} custom={3} className="exp-icon">
              <img
                src="https://static.tildacdn.com/tild6463-6137-4937-b838-616131373739/photo.png"
                alt="ico"
              />
              <span>НАПИТКИ И ЭНЕРГЕТИКИ</span>
            </motion.div>
          </div>
        </div>
        <div className="exp-right">
          <img
            src="https://static.tildacdn.com/tild3065-3330-4261-a237-393566616436/_18.jpg"
            alt="ava"
          />
        </div>
      </div>
    </motion.div>
  );
}
