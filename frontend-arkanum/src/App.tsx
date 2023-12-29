import Navbar from "./components/Navbar.js";
import ScrollPage from "./pages/ScrollPage.js";
import "./App.scss";
import Sider from "./pages/Sider.js";
import LoadingBar from "./components/LoadingBar.js";
import TopSection from "./components/TopSection.js";

export default function App() {
  return (
    <div className="container">
      <LoadingBar />
      <TopSection />
      <Navbar />
      <ScrollPage />
      <Sider />
    </div>
  );
}
