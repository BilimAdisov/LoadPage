"use client";
import { motion } from "framer-motion";
import PromotionTitle from "./promotionTitle";
import FormComponent from "../form/form";

export default function PromotionComponent() {
  const TEXT = [
    {
      id: 1,
      text: "У нас всегда действует акция «Именинникам 50% скидка» (*предоставляется на стрижки любой сложности)",
    },
    {
      id: 2,
      text: "Акция: Отец и Сын - 10 % скидка действует во всей сети барбершопов Marshal",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, et.",
    },
  ];

  return (
    <div id="promotion" className="promotion">
      <div className="promotion-container">
        <motion.div className="promotion-wrapper">
          <span></span>
          {TEXT.map((item: any, i) => (
            <PromotionTitle {...item} key={i} />
          ))}
        </motion.div>
        <FormComponent />
      </div>
    </div>
  );
}
