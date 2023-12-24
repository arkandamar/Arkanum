import Navbar from "./components/Navbar.js";
import ScrollPage from "./pages/ScrollPage.js";
import "./App.scss";
import Searchbar from "./components/Searchbar.js";

export default function App() {
  return (
    <div className="container">
      <Searchbar />
      <Navbar />
      <ScrollPage />
    </div>
  );
}
