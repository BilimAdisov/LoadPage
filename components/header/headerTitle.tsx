"use client";
import Link from "next/link";
import Typed from "react-typed";

export default function HeaderTitle() {
  return (
    <div className="header-title">
      <Typed
        strings={["Добро пожаловать ! ", "Сеть барбершопов в Бишкеке"]}
        typeSpeed={100}
        className="header-h1"
        style={{
          fontSize: "50px",
          fontWeight: "700",
        }}
      />
      <h1>sadsdas</h1>
      <Link href="/rent">
        <button className="header-btn">Онлайн-запись</button>
      </Link>
    </div>
  );
}
