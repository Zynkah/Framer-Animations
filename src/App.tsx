import { FadeInText } from "./components/FadeInText";
import "./App.css";
import { Coin } from "./components/Coin";
import { Dice } from "./components/Dice";
import {RPS} from "./components/RPS";
import { Checkmark } from "./components/Checkmark";
import { SHomePageWrapper, SSideNav } from "./styles/Styles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RainingCoins from "./components/RainingCoins";
import { LoadingChip } from "./components/LoadingChip";
import { DrawnText } from "./components/DrawnText";
import { links } from "./links";

function App() {
  return (
    <Router>
      <SHomePageWrapper>
        <SSideNav>
          <h3>ANIMATIONS LIST</h3>
          <ul>
            {links.map((link, idx) => (
              <li key={idx}>
                <Link to={link.to}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </SSideNav>
        <div>
          <Routes>
            <Route path="/" element={<FadeInText text="ANIMATIONS" />} />
            <Route path="/checkmark" element={<Checkmark />} />
            <Route
              path="/text-fade-in"
              element={<FadeInText text="DRAWING" />}
            />
            <Route path="/dice-roll" element={<Dice />} />
            <Route path="/coin-flip" element={<Coin />} />
            <Route path="/rps" element={<RPS />} />
            <Route path="/raining-coins" element={<RainingCoins />} />
            <Route path="/loading-chip" element={<LoadingChip />} />
            <Route path="/drawn-text" element={<DrawnText />} />
          </Routes>
        </div>
      </SHomePageWrapper>
    </Router>
  );
}

export default App;
