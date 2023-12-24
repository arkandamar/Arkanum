import "./Searchbar.scss";

export default function Searchbar() {
  return (
    <div className="container-search">
      <div className="logo">Arkanum</div>
      <div className="container-bar">
        <input className="searchbar" placeholder="Search Squares" />
      </div>
    </div>
  );
}
