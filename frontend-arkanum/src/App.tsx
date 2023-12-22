import Navbar from "./components/Navbar.js";
import ScrollPage from "./pages/ScrollPage.js";
import "./App.scss";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <ScrollPage />
    </div>
  );
}
