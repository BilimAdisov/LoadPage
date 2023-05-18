"use client";
import { motion } from "framer-motion";
import RentTitleComponent from "@/components/RentComponents/rentTitle";
import AccordionComponent from "@/components/Accordion/accordion";

export default function RentPage() {
  return (
    <div className="rent">
      <div className="rent-wrapper">
        <h1>RENT</h1>
        <RentTitleComponent />
        <AccordionComponent />
      </div>
    </div>
  );
}
