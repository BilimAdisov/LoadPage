"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PortfolioCard from "./portfolioCard";

export default function PortfolioComponent() {
  const Workers = [
    {
      id: 1,
      img: "https://static.tildacdn.com/tild6134-3361-4735-a630-383937316238/9.jpg",
      name: "Элеонора",
      position: "frontend",
      skill: "- Тренер и профессиональный Lady Barber",
      skill1: "- Стрижки любой сложности",
      skill2: "- Подбор индивидуального стиля",
      skill3: "- Подбор индивидуальной формы бороды",
      skill4: "- Опасное бритьё любой сложности",
      skill5: "- Чистка лица (Black mask)",
      skill6: "- Удаление волос горячим воском",
    },
    {
      id: 2,
      img: "https://static.tildacdn.com/tild6664-6131-4666-b663-303165613835/3.png",
      name: "Музафар",
      position: "backend",
      skill: "- Стрижки любой сложности",
      skill1: "- Подбор индивидуального стиля",
      skill2: "- Подбор индивидуальной формы бороды",
      skill3: "- Опасное бритьё любой сложности",
      skill4: "- Чистка лица (Black mask)",
      skill5: "-Удаление волос горячим воском",
    },
    {
      id: 3,
      img: "https://static.tildacdn.com/tild3535-3563-4833-b635-326633623531/8.jpg",
      name: "Тахмина",
      position: "fluter",
      skill: "- Стрижки любой сложности",
      skill1: "- Подбор индивидуального стиля",
      skill2: "- Подбор индивидуальной формы бороды",
      skill3: "- Опасное бритьё любой сложности",
      skill4: "-Удаление волос горячим воском",
    },
    {
      id: 4,
      name: "Марлен",
      img: "https://static.tildacdn.com/tild6463-3235-4135-b238-333762396263/6.jpg",
      position: "assambley",
      skill: "- Стрижки любой сложности",
      skill1: "- Подбор индивидуального стиля",
      skill2: "- Подбор индивидуальной формы бороды",
      skill3: "- Опасное бритьё любой сложности",
      skill4: "- Чистка лица (Black mask)",
    },
    {
      id: 3,
      name: "Тахмина",
      img: "https://static.tildacdn.com/tild3535-3563-4833-b635-326633623531/8.jpg",
      position: "kotline",
      skill: "- Стрижки любой сложности",
      skill1: "- Подбор индивидуального стиля",
      skill2: "- Подбор индивидуальной формы бороды",
      skill3: "- Опасное бритьё любой сложности",
      skill4: "-Удаление волос горячим воском",
    },
    {
      id: 4,
      name: "Марлен",
      img: "https://static.tildacdn.com/tild6463-3235-4135-b238-333762396263/6.jpg",
      position: "swift",
      skill: "- Стрижки любой сложности",
      skill1: "- Подбор индивидуального стиля",
      skill2: "- Подбор индивидуальной формы бороды",
      skill3: "- Опасное бритьё любой сложности",
      skill4: "- Чистка лица (Black mask)",
    },
  ];
  return (
    <div id="portfolio" className="portfolio">
      <div className="portfolio-wrapper">
        <h1 className="port-h1">Наши Барберы</h1>
        <p className="port-phara">
          Все мастера являются профессионалами, мастерами мужских стрижек и
          бритья, а на современном языке «Барберами» с опытом от 3х - 5ти лет и
          более.
        </p>
        <div className="pcard-place">
          <Swiper
            freeMode={true}
            navigation={true}
            slidesPerView={4}
            spaceBetween={30}
            rewind={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Navigation]}
            className="mySwiper"
          >
            {Workers.map((el: any, i) => (
              <SwiperSlide key={i}>
                <PortfolioCard {...el} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
