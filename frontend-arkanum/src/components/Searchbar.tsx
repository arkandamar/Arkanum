import "./Searchbar.scss";
import search from "../assets/search.png";

export default function Searchbar() {
  return (
    <div className="container-search">
      <div className="logo">Arkanum</div>
      <form className="container-bar">
        <button className="search-button" type="submit">
          <img src={search} />
        </button>
        <input className="search-bar" placeholder="Search Squares" />
      </form>
    </div>
  );
}
