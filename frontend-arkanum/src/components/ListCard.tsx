import "./ListCard.scss";

export default function ListCard() {
  return (
    <div className="container-card">
      <div className="title">Popular In Indonesia</div>
      <ul className="container-list">
        <li className="list">
          <div>trending 1</div>
          <div>Anjing Biru</div>
          <div>43.2K Squares</div>
        </li>
        <li className="list">
          <div>trending 1</div>
          <div>Anjing Biru</div>
          <div>43.2K Squares</div>
        </li>
        <li className="list">
          <div>trending 1</div>
          <div>Anjing Biru</div>
          <div>43.2K Squares</div>
        </li>
      </ul>
      <div className="show">Show more</div>
    </div>
  );
}
