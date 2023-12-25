import ListCard from "../components/ListCard.js";
import "./Sider.scss";

export default function Sider() {
  return (
    <div className="container-sider">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className="container-content">
        <ListCard />
      </div>
    </div>
  );
}
