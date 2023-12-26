import "./Navbar.scss";
import home from "../assets/home.png";
import { useRef, useState } from "react";
import PopUp from "./PopUp.js";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [isPopUp, setIsPopUp] = useState<boolean>(false);

  const onClickHandler = () => {
    const navBar: HTMLDivElement | null = navRef.current;

    if (navBar != null) {
      if (navBar.classList.contains("active")) {
        navBar.classList.remove("active");
      } else {
        navBar.classList.add("active");
      }
    }
  };

  return (
    <div ref={navRef} className="navbar">
      <div className="container-menu">
        <div onClick={onClickHandler} className="hamburger-menu">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="menu">
        <img src={home} />
        <div>Home</div>
      </div>
      <div className="menu">
        <img src={home} />
        <div>Home</div>
      </div>
      <div className="menu">
        <img src={home} />
        <div>Home</div>
      </div>
      <div className="menu">
        <img src={home} />
        <div>Home</div>
      </div>
      <div onClick={() => setIsPopUp(!isPopUp)} className="container-display">
        <div className="container-border">
          <div className="border">
            <div className="display"></div>
          </div>
        </div>
        <div className="container-username">
          <div className="name">Arkan Damar</div>
          <div className="username">
            <span>u/</span>arkan
          </div>
        </div>
      </div>
      {isPopUp && <PopUp />}
    </div>
  );
}
