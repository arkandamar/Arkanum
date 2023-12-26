import Navbar from "./components/Navbar.js";
import ScrollPage from "./pages/ScrollPage.js";
import "./App.scss";
import Searchbar from "./components/Searchbar.js";
import Sider from "./pages/Sider.js";
import LoadingBar from "./components/LoadingBar.js";

export default function App() {
  return (
    <div className="container">
      <LoadingBar />
      <Searchbar />
      <Navbar />
      <ScrollPage />
      <Sider />
    </div>
  );
}
