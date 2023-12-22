import "./Navbar.scss";
import home from "../assets/home.png";
import { useRef } from "react";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
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
      <div className="container-display">
        <div className="container-border">
          <div className="border">
            <div className="display"></div>
          </div>
        </div>
        <div className="username">arkan</div>
      </div>
    </div>
  );
}
