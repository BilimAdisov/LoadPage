"use client";
import { BsListColumns } from "react-icons/bs";
import { useState, useEffect } from "react";
import ModalComponent from "../modal/modalC";
import SliderComponent from "../slider/slider";
import { ServiceList } from "@/common/moks/serviceMoks";

export default function ServiceComponent() {
  const [openSM, setOpenSM] = useState<boolean>(false);

  useEffect(() => {
    if (openSM) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openSM]);

  return (
    <div className="service">
      <div className="service-wrapper">
        <div
          className="icon-container"
          data-clue="Показать как список"
          onClick={() => setOpenSM(true)}
        >
          <BsListColumns size={30} />
        </div>
        <ModalComponent open={openSM} close={() => setOpenSM(false)}>
          <ul className="ms-list">
            {ServiceList.map((item: any) => (
              <li className="ms-item" key={item.id}>
                <span className="s-naming">{item.name}</span>
                <span className="s-price">{item.price} сомов</span>
              </li>
            ))}
          </ul>
        </ModalComponent>
        <div className="slider-container">
          <SliderComponent />
        </div>
      </div>
    </div>
  );
}
