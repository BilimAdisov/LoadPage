import { useState } from "react";
import Drawer from "react-modern-drawer";

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(true);

  function toggleDrawer() {
    setIsOpen((prevState: boolean) => !prevState);
  }

  return (
    <div className="header">
      <div className="header-wrapper">
        <ul className="nav-list">
          <li className="logo">
            <img
              src="https://cdn.pixabay.com/photo/2018/03/18/18/55/cat-3237903_960_720.png"
              alt="logo"
            />
          </li>
          <a href="#experiance">
            <li className="nav-item">О нас</li>
          </a>
          <a href="#slider">
            <li className="nav-item">Услуги</li>
          </a>
          <a href="#portfolio">
            <li className="nav-item">Мастера</li>
          </a>
          <a href="#promotion">
            <li className="nav-item">Акции</li>
          </a>
          <a href="#aboutus">
            <li className="nav-item">Почему мы?</li>
          </a>
          <li className="nav-item">Онлайн-запись</li>
        </ul>
        {/* <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      className="burger"
    >
      <ul className="burger-list">
        <div className="burger-logo">
          <img
            src="https://static.tildacdn.com/tild3638-3063-4566-b430-313537303335/logosince.png"
            alt="logo"
            style={{
              width: "62px",
            }}
          />
        </div>
        <li className="burger-item">О нас</li>
        <li className="burger-item">Услуги</li>
        <li className="burger-item">Мастера</li>
        <li className="burger-item">Акции</li>
        <li className="burger-item">Почему мы?</li>
        <li className="burger-item">Онлайн-запись</li>
      </ul>
    </Drawer> */}
      </div>
    </div>
  );
}
