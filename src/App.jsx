import logo from "./logo.svg";
import "./App.css";
import { RouterContext, RouterProvider } from "./contexts/RouterContext";
import { useContext } from "react";
import Link from "./components/Link";
import Route from "./components/Route";
import Home from "./pages/Home";
import Contato from "./pages/Contato";

function App() {
  const { currentRoute, setCurrentRoute } = useContext(RouterContext);
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Route path="/" element={<Home />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/sobre" element={<h1>Sobre</h1>} />
    </div>
  );
}

export default App;
