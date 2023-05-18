"use client";
import { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

export default function SliderComponent() {
  const sliderItem = [
    {
      id: 1,
      title: "Мужская стрижка",
      price: 500,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quos nemo sit minima eveniet laborum beatae alias minus ipsam. Facilis quos optio aperiam! Nihil facilis atque placeat reiciendis, laudantium possimus",
      img: "https://get.wallhere.com/photo/wood-snow-Sun-beams-dawn-frost-snowdrifts-cold-awakening-676946.jpg",
    },
    {
      id: 2,
      title: "Детская стрижка",
      price: 400,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quos nemo sit minima eveniet laborum beatae alias minus ipsam. Facilis quos optio aperiam! Nihil facilis atque placeat reiciendis, laudantium possimus",
      img: "https://img1.akspic.ru/attachments/crops/3/0/4/4/6/164403/164403-assassins_creed_valhalla-ubisoft-action_adventure_game-otkrytyj_mir-xbox_serii_x_i_serii_s-1920x1080.jpg",
    },
    {
      id: 3,
      title: "Моделирование бороды",
      price: 300,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quos nemo sit minima eveniet laborum beatae alias minus ipsam. Facilis quos optio aperiam! Nihil facilis atque placeat reiciendis, laudantium possimus",
      img: "https://cosmos-online.ru/wp-content/uploads/2018/10/oboi-kosmos-16.jpg",
    },
    {
      id: 4,
      title: "Коррекция бороды",
      price: 224,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quos nemo sit minima eveniet laborum beatae alias minus ipsam. Facilis quos optio aperiam! Nihil facilis atque placeat reiciendis, laudantium possimus",
      img: "https://w.wallhaven.cc/full/vq/wallhaven-vqyge5.png",
    },
  ];

  const [amount, setAmount] = useState<number>(0);
  const [cord, setCord] = useState<number | null>(100);
  const [size, setSize] = useState<any>();

  useEffect(() => {
    setCord(amount * 500);
    setSize(sliderItem.length * 500);
  }, [amount]);

  const lengthFix = sliderItem.length - 1;

  return (
    <div id="slider" className="slider">
      <div className="slider-wrapper">
        <div className="Sleft">
          <div className="title-container" style={{ height: `${size}px` }}>
            {sliderItem.reverse().map((title: any) => (
              <div
                className="title-wrapper"
                style={{
                  transition: "all 0.5s",
                  transform: `translateY(${cord}px)`,
                }}
                key={title.id}
              >
                <h5 style={{ color: "white" }}>
                  {title.title}{" "}
                  <span style={{ color: "gold" }}>{title.price} сом</span>
                  <p style={{ color: "silver" }}>{title.description}</p>
                </h5>
              </div>
            ))}
          </div>
        </div>
        <div className="Sright">
          <div className="img-container" style={{ height: `${size}px` }}>
            {sliderItem.reverse().map((img: any) => (
              <div
                className="img-wrapper"
                key={img.id}
                style={{
                  transition: "all 0.5s",
                  transform: `translateY(-${cord}px)`,
                }}
              >
                <img src={img.img} alt="image" />
              </div>
            ))}
          </div>
        </div>
        <div className="navigation">
          <button
            onClick={() => setAmount(amount > lengthFix - 1 ? 0 : amount + 1)}
          >
            <MdOutlineKeyboardArrowUp size={50} />
          </button>
          <button
            onClick={() => setAmount(amount <= 0 ? lengthFix : amount - 1)}
          >
            <MdOutlineKeyboardArrowDown size={50} />
          </button>
        </div>
      </div>
    </div>
  );
}
