import "./PopUp.scss";

export default function PopUp() {
  return (
    <>
      <div className="triangle"></div>
      <div className="container-popup">
        <div className="option switch">Switch Account</div>
        <div className="option logout">Logout</div>
      </div>
    </>
  );
}
