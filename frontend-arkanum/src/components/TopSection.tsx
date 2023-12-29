import SearchBar from "./SearchBar.js";
import "./TopSection.scss";

export default function TopSection() {
  return (
    <div className="container-top">
      <div className="logo">Arkanum</div>
      <SearchBar />
    </div>
  );
}
